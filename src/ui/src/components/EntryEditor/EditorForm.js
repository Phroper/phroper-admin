import { Button, Grid, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router";
import AlertButton from "../AlertButton";
import { FieldComponentMap } from "./Fields";

export default function EditorForm({
  schema,
  isCreating,
  contentHandler,
  contentApi,
  id,
}) {
  const history = useHistory();

  return (
    <VStack p={4} bg="white" shadow="md" flex={1} alignItems="stretch">
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          "2xl": "repeat(3, 1fr)",
        }}
        flex={1}
        gap={6}
        mb={6}
      >
        {Object.keys(schema.fields).map((fn) => (
          <SchemaField
            key={fn}
            schema={schema.fields[fn]}
            isCreating={isCreating}
          />
        ))}
      </Grid>
      <HStack w="100%" justifyContent="space-between">
        {!isCreating && (
          <AlertButton
            type="button"
            colorScheme="brand"
            headerText="Deleting"
            message="Are you sure? This action can not be undone!"
            onClick={() =>
              contentHandler.run(async () => {
                await contentApi.delete(id);
                history.goBack();
              })
            }
          >
            Delete
          </AlertButton>
        )}
        <Button type="submit" colorScheme="green">
          Save
        </Button>
      </HStack>
    </VStack>
  );
}

function SchemaField(props) {
  if (props.schema.visible === false) return null;
  const EditComponent =
    FieldComponentMap[props.schema.type] ?? FieldComponentMap.default;

  if (EditComponent) return <EditComponent {...props} />;
  return null;
}
