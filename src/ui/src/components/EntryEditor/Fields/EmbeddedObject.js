import { Box, GridItem } from "@chakra-ui/react";
import React from "react";
import EmbeddedEditor from "./EmbeddedEditor";

export default function EmbeddedObject({ schema, isCreating }) {
  console.log("EmbeddedSchema", schema);
  return (
    <GridItem colSpan={4}>
      <Box flex="1" textAlign="left" fontWeight="bold" fontSize="xl">
        {schema.name}
      </Box>
      <EmbeddedEditor schema={schema} isCreating={isCreating} />
    </GridItem>
  );
}
