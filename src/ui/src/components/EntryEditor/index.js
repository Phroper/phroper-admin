import {
  Box,
  Button,
  HStack,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { default as React, useContext, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import GenerateYup from "../../utils/GenerateYup";
import useRequest from "../../utils/useRequest";
import { PluginContext } from "./../../app/plugin-system/PluginContext";
import useRequestRunner from "./../../utils/useRequestRunner";
import EditorForm from "./EditorForm";
import EditorInfo from "./EditorInfo";

export default function EntryEditor({ isCreating, schema }) {
  const history = useHistory();
  const { model, id } = useParams();
  const plugins = useContext(PluginContext);

  // Api communication
  const contentApi = useRequest(`/content-manager/${model}`);
  const contentHandler = useRequestRunner(() => contentApi.get(id), {});
  useEffect(() => {
    if (!isCreating) contentHandler.run();
    //eslint-disable-next-line
  }, [isCreating, id]);

  // Toast notification handling
  const toast = useToast();
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

  // Collected data for editor and addons
  const editorContext = {
    isCreating,
    history,
    schema,
    id,
    model,
    toast,
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
          <VStack flex={1} alignItems="stretch">
            <HStack mb={4}>
              <Button
                colorScheme="red"
                onClick={() => history.goBack()}
                variant="link"
              >
                Back
              </Button>
            </HStack>
            {Object.keys(plugins.components)
              .filter(
                (k) =>
                  k.startsWith("EditorAddon::") &&
                  plugins.components[k] &&
                  plugins.components[k].pos_before
              )
              .map((k) => {
                const Component = plugins.components[k];
                return <Component key={k} {...editorContext} />;
              })}
            <Stack
              direction={{ sm: "column", xl: "row" }}
              alignItems={{ base: "stretch" }}
            >
              <EditorForm {...editorContext} />
              {!isCreating && <EditorInfo {...editorContext} />}
            </Stack>
            {Object.keys(plugins.components)
              .filter(
                (k) =>
                  k.startsWith("EditorAddon::") &&
                  plugins.components[k] &&
                  !plugins.components[k].pos_before
              )
              .map((k) => {
                const Component = plugins.components[k];
                return <Component key={k} {...editorContext} />;
              })}
          </VStack>
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
