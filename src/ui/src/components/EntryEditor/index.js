import { Box, Button, HStack, Stack, Text, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { default as React, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import GenerateYup from "../../utils/GenerateYup";
import useRequest from "../../utils/useRequest";
import useRequestRunner from "./../../utils/useRequestRunner";
import EditorForm from "./EditorForm";
import EditorInfo from "./EditorInfo";

export default function EntryEditor({ isCreating, schema }) {
  const { model, id } = useParams();
  const history = useHistory();
  const contentApi = useRequest(`/admin/content-manager/${model}`);

  const toast = useToast();

  const contentHandler = useRequestRunner(() => contentApi.get(id), []);
  useEffect(() => {
    if (!contentHandler.error) return;
    toast({
      title: "Server error",
      description: contentHandler.error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    contentHandler.setError(null);
    //eslint-disable-next-line
  }, [contentHandler.error, contentHandler.resetError, toast]);

  useEffect(() => {
    if (!isCreating) contentHandler.run();
    //eslint-disable-next-line
  }, [isCreating, id]);

  const editorContext = {
    isCreating,
    history,
    schema,
    id,
    contentHandler,
    contentApi,
  };

  return (
    <>
      <Box>
        <Text fontSize={40} mb={4}>
          {contentHandler.result && !isCreating
            ? `${contentHandler.result[schema.display]} (${schema.name})`
            : schema.name}
        </Text>
        <FormikWrapper {...editorContext}>
          <HStack mb={6}>
            <Button
              colorScheme="red"
              onClick={() => history.goBack()}
              variant="link"
            >
              Back
            </Button>
          </HStack>
          <Stack
            flex={1}
            direction={{ sm: "column", xl: "row" }}
            alignItems={{ sm: "stretch", xl: "flex-start" }}
          >
            <EditorForm {...editorContext} />
            {!isCreating && <EditorInfo {...editorContext} />}
          </Stack>
        </FormikWrapper>
      </Box>
    </>
  );
}

function FormikWrapper({
  children,
  isCreating,
  schema,
  id,
  contentHandler,
  contentApi,
}) {
  const history = useHistory();

  const formikInitialValues = useMemo(() => {
    const initVals = {};
    Object.values(schema.fields).forEach((field) => {
      if (field.default != null && !field.auto)
        initVals[field.key] = field.default;
    });
    return initVals;
  }, [schema]);

  const validationSchema = GenerateYup(schema);
  return (
    <Formik
      key={contentHandler.result && contentHandler.result[schema.primary]}
      initialValues={isCreating ? formikInitialValues : contentHandler.result}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={async (data) => {
        console.log(data);

        const result = await contentHandler.run(
          isCreating ? contentApi.create(data) : contentApi.update(data, id)
        );
        if (!result) return;
        if (isCreating) {
          history.replace("./" + result[schema.primary]);
        }
      }}
    >
      {(isCreating || !contentHandler.isLoading) && <Form>{children}</Form>}
    </Formik>
  );
}
