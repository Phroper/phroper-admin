import { Box } from "@chakra-ui/react";
import React from "react";
import EmbeddedEditor from "./EmbeddedEditor";

export default function EmbeddedObject({ schema, isCreating }) {
  return (
    <Box pl={3} flex={1} borderLeft="1px solid" borderColor="brand.500">
      <EmbeddedEditor
        schema={schema}
        isCreating={isCreating}
        prefix={schema.key}
      />
    </Box>
  );
}

EmbeddedObject.grid = EmbeddedEditor.grid;
