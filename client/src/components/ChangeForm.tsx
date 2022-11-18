import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
import Button from "./ButtonStyled";
import Title from "./TitleStyled";

const ChangeFormStyled = styled.div <{ mode: string }>`
  position: absolute;
  left: ${({ mode }) => (mode === "signin" ? "0px" : "50%")};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  width: 50%;
  height: 100%;
`;

interface IChangeForm {
  mode: string;
  title: string;
  buttonTitle: string;
  handleSubmit: () => void;
}

const ChangeForm = (props: IChangeForm) => {
  return (
    <ChangeFormStyled mode={props.mode}>
      <Title color={colors.light} >
        {props.title}
      </Title>
      <Button bg={colors.bright} textColor={colors.light} onClick={props.handleSubmit}>
        {props.buttonTitle}
      </Button>
    </ChangeFormStyled>
  );
};


export default ChangeForm;