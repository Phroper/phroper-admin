import React from "react";
import { Switch } from "react-router-dom";

export default function Bool({ formik, name, ...props }) {
  return (
    <Switch
      size="lg"
      colorScheme="red"
      {...props}
      log={console.log(formik)}
      isChecked={formik.values && formik.values[name]}
      onChange={() =>
        formik.setFieldValue(name, !(formik.values && formik.values[name]))
      }
    />
  );
}
