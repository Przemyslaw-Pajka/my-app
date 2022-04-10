import { Field, useField } from "formik";
import { Error, InputFieldStyled, Label } from "./styles/InputField.styled";

export const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <InputFieldStyled>
      <Label
        htmlFor={props.id || props.name}>
        {label}
      </Label>
      <Field
        as={props.as}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Error>{meta.error}</Error>
      ) : null}
    </InputFieldStyled>
  );
};
