import { useField } from "formik";
import styled from "styled-components";
import React, { useState } from "react";

interface ITextProp {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const ErrorMessageStyled = styled.div`
  color: red;
`;

const TextInputStyled = styled.div<{}>`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TextInput = (props: ITextProp) => {
  const [field, meta] = useField(props);
  return (
    <TextInputStyled>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        {...field}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
      {meta.touched && meta.error ? (
        <ErrorMessageStyled>{meta.error}</ErrorMessageStyled>
      ) : null}
    </TextInputStyled>
  );
};

export default TextInput;
