import { ArrowDownIcon, ArrowUpIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
} from "@chakra-ui/react";
import EmbeddedEditor from "./EmbeddedEditor";

export default function EmbeddedArray({
  formik,
  schema,
  onChange,
  isCreating,
}) {
  console.log("EmbeddedSchemaArray", schema);
  const name = schema.key;

  let value = formik.values[name];
  value = Array.isArray(value) ? value : [];

  return (
    <Box>
      <Accordion allowToggle>
        {value.map((v, i) => (
          <AccordionItem key={i}>
            <h2>
              <AccordionButton>
                <HStack w="100%" justify="space-between">
                  <Box flex="1" textAlign="left">
                    {schema.display && v && typeof v === "object"
                      ? v[schema.display]
                      : i + 1}
                  </Box>
                  <Box mr={2}>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        formik.setFieldValue(name, [
                          ...value.slice(0, i - 1),
                          value[i],
                          value[i - 1],
                          ...value.slice(i + 1),
                        ]);
                      }}
                      colorScheme="red"
                      variant="ghost"
                      disabled={i === 0}
                    >
                      <ArrowUpIcon />
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        formik.setFieldValue(name, [
                          ...value.slice(0, i),
                          ...value.slice(i + 1),
                        ]);
                      }}
                      colorScheme="red"
                      variant="ghost"
                    >
                      <DeleteIcon />
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        formik.setFieldValue(name, [
                          ...value.slice(0, i),
                          value[i + 1],
                          value[i],
                          ...value.slice(i + 2),
                        ]);
                      }}
                      colorScheme="red"
                      variant="ghost"
                      disabled={i === value.length - 1}
                    >
                      <ArrowDownIcon />
                    </Button>
                  </Box>
                </HStack>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <EmbeddedEditor
                schema={schema}
                isCreating={isCreating}
                prefix={`${schema.key}[${i}]`}
              />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      <Button
        w="100%"
        colorScheme="red"
        variant="ghost"
        fontSize="3xl"
        onClick={() => formik.setFieldValue(`${name}[${value.length}]`, null)}
      >
        +
      </Button>
    </Box>
  );
}

EmbeddedArray.grid = EmbeddedEditor.grid;
