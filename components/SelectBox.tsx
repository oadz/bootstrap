import React, { useState } from "react";
import { Menu, MenuItem, Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead.bs5.css";
import { Form } from "react-bootstrap";
type Props = {
  id: string;
  optionSelect: DataOptions[];
  placeHolder: string;
  onChange: (value: any) => void;
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
    onChange(selection);
  };
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
