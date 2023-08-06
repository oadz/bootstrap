import React from "react";
import { Form } from "react-bootstrap";

type Props = {
  type: "text" | "email" | "password" | "number" | "file" | "date" | "tel";
  id: string;
  placeHolder?: string;
  value: any;
  // defaultValue: any;
  max?: any;
  readonly?: boolean;
  isTextarea?: boolean;
  rows?: number;
  disabled?: boolean;
  onChange: (id: string, value: any) => void | undefined;
  required: boolean;
  isValid?: boolean;
  isInvalid?: boolean;
  style?: React.CSSProperties;
  className?: string;
  ErrorMssage?: string;
  maxLength?: number;
};

const InputText = ({
  id,
  type,
  placeHolder,
  isTextarea,
  readonly,
  value,
  // defaultValue,
  rows,
  disabled,
  isValid,
  isInvalid,
  style,
  className,
  max,
  required,
  ErrorMssage,
  maxLength,
  onChange,
}: Props) => {
  const handleChange = (event: any) => {
    const inputValue = event.target.value;
    onChange(id, inputValue);
    // onChange(inputValue);
  };
  return isTextarea ? (
    <div className="form-group">
      <div>
        <Form.Label>{id}</Form.Label>
        <Form.Control
          as="textarea"
          id={id}
          type={type}
          readOnly={readonly}
          placeholder={placeHolder}
          value={value}
          // defaultValue={defaultValue}
          onChange={handleChange}
          rows={rows}
          disabled={disabled}
          style={style}
          isValid={isValid}
          isInvalid={isInvalid}
          className={className}
          maxLength={maxLength}
        />
      </div>
    </div>
  ) : (
    <div className="form-group">
      <div>
        <Form.Label>{id} :</Form.Label>
        <Form.Control
          as="input"
          id={id}
          type={type}
          placeholder={placeHolder}
          readOnly={readonly}
          disabled={disabled}
          required={required}
          value={value}
          // defaultValue={defaultValue}
          onChange={handleChange}
          max={max}
          style={style}
          isValid={isValid}
          isInvalid={isInvalid}
          className={className}
          maxLength={maxLength}
        />
        <Form.Control.Feedback type="invalid" id={id}>
          {ErrorMssage}
        </Form.Control.Feedback>
      </div>
    </div>
  );
};

export default InputText;
