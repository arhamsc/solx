import { ChangeEvent, ChangeEventHandler } from "react";

type InputFieldProps = {
  id: string;
  label: string;
  type?: string;
  name: string;
  required?: boolean;
  onChangeHandler?: ChangeEventHandler;
  value?: string;
  readOnly?: boolean
};

const InputField = ({
  id,
  label,
  type = "text",
  name,
  required,
  onChangeHandler,
  value,
  readOnly
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 pb-4 w-full">
      <label htmlFor={id} className="text-xl font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        readOnly={readOnly}
        autoComplete="off"
        className="w-full bg-cream rounded-xl px-4 py-2 border-collapse"
        required={required}
        onChange={onChangeHandler}
        value={value}
      />
    </div>
  );
};

export default InputField;
