import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { FieldComponentMap } from ".";

export default function EmbeddedObject({ schema, isCreating }) {
  console.log("EmbeddedSchema", schema);
  return (
    <GridItem colSpan={4}>
      <Box flex="1" textAlign="left" fontWeight="bold" fontSize="xl">
        {schema.name}
      </Box>
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
    </GridItem>
  );
}

function SchemaField(props) {
  const EditComponent =
    FieldComponentMap[props.schema.type] ?? FieldComponentMap.default;

  if (EditComponent) return <EditComponent {...props} />;
  return null;
}
