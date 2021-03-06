import { Box, FormControl, FormLabel, Text } from "@chakra-ui/react";
import { connect } from "formik";
import moment from "moment";
import React, { useMemo } from "react";

export default function EditorInfo({ schema }) {
  const fields = useMemo(
    () =>
      Object.keys(schema.fields).filter((key) => {
        const fs = schema.fields[key];
        return fs.auto && fs.readonly && fs.visible !== false;
      }),
    [schema]
  );
  if (fields.length === 0) return null;
  return (
    <Box minW="350px" p={4} bg="white" shadow="md">
      <Text fontWeight="bold" fontSize={20}>
        Information
      </Text>
      {fields.map((f) => (
        <InfoField
          schema={schema.fields[f]}
          key={f}
          name={schema.fields[f].key}
        />
      ))}
    </Box>
  );
}

const InfoField = connect(function ({ name, value, formik, schema, ...props }) {
  const v = formik.values && formik.values[name];

  return (
    <FormControl>
      <FormLabel>{schema.name}</FormLabel>
      <Text {...props}>
        {(() => {
          if (v && schema.type === "date")
            return moment(new Date(v)).format("YYYY-MM-DD");
          else if (v && schema.type === "datetime")
            return moment(new Date(v)).format("YYYY-MM-DD HH:mm:ss");
          else if (v && schema.type === "timestamp")
            return moment(new Date(v)).format("YYYY-MM-DD HH:mm:ss");
          else if (v && typeof v === "object") return v[schema.display];
          else if (v != null) return v;
          else return "-";
        })()}
      </Text>
    </FormControl>
  );
});
