import { Grid } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { FieldComponentMap } from ".";

export default function EmbeddedEditor({ schema, isCreating, prefix }) {
  schema = useMemo(
    () =>
      schema && prefix ? { ...schema, key: `${prefix}.${schema.key}` } : schema,
    [schema, prefix]
  );

  const fields = useMemo(() => {
    const nf = {};
    Object.keys(schema.fields).forEach((k) => {
      nf[k] = prefix
        ? { ...schema.fields[k], key: `${prefix}.${schema.fields[k].key}` }
        : schema.fields[k];
    });
    return nf;
  }, [schema, prefix]);

  console.log("EmbeddedEditor", fields);

  const grid = schema.grid || EmbeddedEditor.grid;

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        lg: `repeat(${Math.min(2, grid[0])}, 1fr)`,
        "2xl": `repeat(${Math.min(3, grid[0])}, 1fr)`,
      }}
      flex={1}
      gap={6}
      mb={6}
    >
      {Object.keys(fields).map((fn) => (
        <SchemaField key={fn} schema={fields[fn]} isCreating={isCreating} />
      ))}
    </Grid>
  );
}

function SchemaField(props) {
  if (props.schema.visible === false) return null;
  const EditComponent =
    FieldComponentMap[props.schema.type] ?? FieldComponentMap.default;

  if (EditComponent) return <EditComponent {...props} />;
  return null;
}

EmbeddedEditor.grid = [3, 1];
