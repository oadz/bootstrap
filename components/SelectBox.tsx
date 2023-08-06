import React, { useState } from "react";
import { Menu, MenuItem, Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead.bs5.css";
import { Form } from "react-bootstrap";
type Props = {
  id: string;
  optionSelect: DataOptions[];
  placeHolder: string;
  onChange: (id: string, value: any) => void | undefined;
  labelKey: string;
  defaultValue?: any;
  disabled?: boolean;
};
interface DataOptions {
  id: number;
  name: string;
}
const SelectBox = ({
  optionSelect,
  placeHolder,
  id,
  labelKey,
  defaultValue,
  disabled,
  onChange,
}: Props) => {
  const [selected, setSelected] = useState(defaultValue);
  const handleSelection = (selection: any) => {
    setSelected(selection);
    onChange(id, selection);
  };
  console.log("selection", selected);
  return (
    <div className="form-group">
      <Form.Label>{id}</Form.Label>
      <Typeahead
        id={id} //customi
        onChange={handleSelection}
        options={optionSelect}
        placeholder={placeHolder}
        selected={selected}
        labelKey={labelKey} //ตัวแสดงโชว์ของข้อมูล options
        disabled={disabled}
        // isValid={true}
        // isInvalid={true}
      />
    </div>
  );
};

export default SelectBox;
