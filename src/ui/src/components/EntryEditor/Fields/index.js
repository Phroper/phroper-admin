import {
  FormControl,
  FormLabel,
  GridItem,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { connect, ErrorMessage, Field } from "formik";
import React from "react";
import Bool from "./Bool";
import DatePicker from "./DatePicker";
import EmbeddedArray from "./EmbeddedArray";
import EmbeddedObject from "./EmbeddedObject";
import Enum from "./Enum";
import FileMulti from "./FileMulti";
import FileOne from "./FileOne";
import Json from "./Json";
import RelationOne from "./RelationOne";

function ConnectSchemaField(EditComponent, addProps = null) {
  return connect(({ schema, isCreating, ...props }) => {
    const disabled = isCreating ? schema.auto : schema.readonly;
    if (schema.auto && schema.readonly) return null;

    const grid = (schema.grid &&
      (Array.isArray(schema.grid) ? schema.grid : [schema.grid, 1])) ||
      (EditComponent && EditComponent.grid) || [1, 1];

    return (
      EditComponent && (
        <GridItem
          colSpan={{
            sm: 1,
            lg: Math.min(2, grid[0]),
            "2xl": Math.min(3, grid[0]),
          }}
          rowSpan={grid[1]}
          minH={`${2.5 + (grid[1] - 1) * 4}em`}
          h="100%"
        >
          <FormControl minW="20%" h="100%" display="flex" flexDir="column">
            <FormLabel>{schema.name}</FormLabel>
            <Field
              as={EditComponent}
              name={schema.key}
              placeholder={schema.name}
              disabled={disabled}
              schema={schema}
              required={
                !disabled && schema.required && (!schema.private || isCreating)
              }
              {...props}
              {...(addProps || {})}
            />
            <ErrorMessage component={Text} color="red.500" name={schema.key} />
          </FormControl>
        </GridItem>
      )
    );
  });
}

export const FieldComponentMap = {
  default: ConnectSchemaField(Input),
  email: ConnectSchemaField(Input, { type: "email" }),
  password: ConnectSchemaField(Input, { type: "password" }),
  textarea: ConnectSchemaField(Textarea, { resize: "none" }),
  bool: ConnectSchemaField(Bool),
  enum: ConnectSchemaField(Enum),
  relation_one: ConnectSchemaField(RelationOne),
  relation_many: false,
  file: ConnectSchemaField(FileOne),
  file_multi: ConnectSchemaField(FileMulti),
  embedded_object: ConnectSchemaField(EmbeddedObject),
  embedded_array: ConnectSchemaField(EmbeddedArray),
  date: ConnectSchemaField(DatePicker),
  datetime: ConnectSchemaField(DatePicker),
  timestamp: ConnectSchemaField(DatePicker),
  json: ConnectSchemaField(Json),
};
