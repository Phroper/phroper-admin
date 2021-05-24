import "prism-themes/themes/prism-coldark-dark.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-json";
import React, { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";

export default function Json({ value, formik, name, onBlur, onFocus }) {
  const [textValue, setTextValue] = useState(JSON.stringify(value, null, 2));
  const [hasError, setHasError] = useState(false);
  const setValue = formik.setFieldValue;

  useEffect(() => {
    let timeout = setTimeout(() => {
      timeout = 0;
      try {
        const nv = JSON.parse(textValue);
        setValue(name, nv);
        setHasError(false);
      } catch (ex) {
        setValue(name, ex);
        setHasError(true);
      }
    }, 250);
    return () => timeout && clearTimeout(timeout);
  }, [textValue, setValue, name]);

  return (
    <Editor
      value={textValue}
      onValueChange={setTextValue}
      padding={16}
      onBlur={() => !hasError && setTextValue(JSON.stringify(value, null, 2))}
      highlight={(code) => highlight(code || "", languages.json)}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 14,
        background: hasError ? "#6c223d" : "#3c526d",
        flex: 1,
        transition: "background-color 0.25s linear",
      }}
      preClassName="language-json"
    />
  );
}

Json.grid = [1, 5];
