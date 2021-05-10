import { Box } from "@chakra-ui/react";
import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css";

const DatePickerBase = ({
  onChange,
  isClearable = false,
  showPopperArrow = false,
  value,
  ...props
}) => {
  return (
    <Box>
      <ReactDatePicker
        type="date"
        selected={typeof value === "string" ? new Date(value) : value}
        onChange={onChange}
        isClearable={isClearable}
        showPopperArrow={showPopperArrow}
        {...props}
      />
    </Box>
  );
};

export default DatePickerBase;
