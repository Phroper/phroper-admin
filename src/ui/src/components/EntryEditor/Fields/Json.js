import { Box } from "@chakra-ui/layout";
import React, { useRef } from "react";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

export default function Json({ value, formik, name }) {
  console.log(formik.errors);
  const valueRef = useRef(value);
  return (
    <Box flex={1}>
      <JSONInput
        id="a_unique_id"
        placeholder={valueRef.current}
        theme="dark_vscode_tribute"
        locale={locale}
        waitAfterKeyPress={250}
        style={{}}
        width="100%"
        height="100%"
        onChange={({ jsObject, error }) => {
          formik.setFieldValue(
            name,
            error ? new Error(error.reason) : jsObject
          );
          formik.setFieldError(name, error.reason);
        }}
      />
    </Box>
  );
}

Json.grid = [1, 5];
