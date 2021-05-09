import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  GridItem,
} from "@chakra-ui/react";
import { connect } from "formik";
import EmbeddedEditor from "./EmbeddedEditor";

function EmbeddedArray({ formik, schema, onChange, isCreating }) {
  console.log("EmbeddedSchemaArray", schema);
  const name = schema.key;

  let value = formik.values[name];
  value = Array.isArray(value) ? value : [];

  return (
    <GridItem colSpan={4}>
      <Box flex="1" textAlign="left" fontWeight="bold" fontSize="xl">
        {schema.name}
      </Box>
      <Accordion allowToggle>
        {value.map((v, i) => (
          <AccordionItem key={i}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {i + 1}.
                  {/*<Button
                    onClick={() =>
                      formik.setFieldValue(name, [
                        ...value.slice(0, i),
                        ...value.slice(i + 1),
                      ])
                    }
                  >
                    del
                </Button>*/}
                </Box>
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
    </GridItem>
  );
}

export default connect(EmbeddedArray);
