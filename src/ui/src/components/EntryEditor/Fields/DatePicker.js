import { connect } from "formik";
import DatePickerBase from "./DatePickerBase/index";

const dateFormats = {
  date: "yyyy-MM-dd",
  datetime: "yyyy-MM-dd HH:mm",
  timestamp: "yyyy-MM-dd HH:mm:ss",
};

function DatePicker({ formik, schema, name, value }) {
  return (
    <DatePickerBase
      name={name}
      onChange={(v) => formik.setFieldValue(name, v)}
      timeFormat="HH:mm"
      dateFormat={dateFormats[schema.type]}
      showTimeSelect={schema.type !== "date"}
      value={value}
    />
  );
}

export default connect(DatePicker);
