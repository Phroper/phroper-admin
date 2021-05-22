import { Switch } from "@chakra-ui/react";
import React from "react";

export default function Bool({ formik, name, ...props }) {
  console.log("renderbool");
  return (
    <Switch
      size="lg"
      colorScheme="brand"
      {...props}
      log={console.log(formik)}
      isChecked={formik.values && formik.values[name]}
      onChange={() =>
        formik.setFieldValue(name, !(formik.values && formik.values[name]))
      }
    />
  );
}
