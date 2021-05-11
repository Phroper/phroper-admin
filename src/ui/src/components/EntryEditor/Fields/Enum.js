import { Select } from "@chakra-ui/react";
import React from "react";

export default function Enum({ schema, placeholder, ...props }) {
  return (
    <Select {...props}>
      {schema.values.map((v) => (
        <option value={v}>{v}</option>
      ))}
    </Select>
  );
}
