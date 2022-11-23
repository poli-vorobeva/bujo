import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";
import { colors } from "../styles/variables";
import bgForm from "../../public/images/sunset.jpg";
import {useDispatch, useSelector} from "react-redux";
import { AppDispatch } from "../dto";
import { authUserData, regUserData } from "../reducer/fetchUserData";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {IUser} from "./main";
import {getCanvasData} from "../reducer/canvasChartData";

interface ITextProp {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

interface IStyle {
  bg?: string;
  textColor?: string;
}

const FormStyled = styled.div<{ mode: string }>`
  position: absolute;
  top: 0;
  left: ${({ mode }) => (mode === "signin" ? "50%" : "0px")};
  display: ${({ mode }) => (mode === "signin" ? "none" : "flex")};
  z-index: ${({ mode }) => (mode === "signin" ? 0 : 20)};
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 0;
  padding: 10px 30px;
  transition: all 1s;
  background-color: ${colors.light};
`;

const Button = styled.button<{ styleComp: IStyle }>`
  padding: 5px 15px;
  font-size: 16px;
  border: none;
  color: ${({ styleComp }) => styleComp.textColor};
  background-color: ${({ styleComp }) => styleComp.bg};
`;

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

const Title = styled.h2<{ light: boolean }>`
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: ${({ light }) => (light ? colors.light : colors.dark)};
`;

const SchemaIn = yup.object({
  email: yup.string().email("Invalid email").required("This field is required"),
  password: yup
    .string()
    .min(6, "Must have at least 6 characters")
    .required("This field is required"),
});
const SchemaUp = yup.object({
  email: yup.string().email("Invalid email").required("This field is required"),
  password: yup
    .string()
    .min(6, "Must have at least 6 characters")
    .required("This field is required"),
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(15, "Must be 15 characters or less")
    .required("This field is required"),
});

interface ITextForm {
  mode: string;
  title: string;
  buttonName: string;
  onSubmitClick: AppDispatch;
  navigate: NavigateFunction;
}

const TextFormStyled = styled(Form)<{}>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SignupForm = (props: ITextForm) => {
  return (
    <FormStyled mode={props.mode}>
      <Title light={false}>{props.title}</Title>
      <Formik
        initialValues={{
          password: "",
          email: "",
          name: "",
        }}
        validationSchema={props.mode === "signin" ? SchemaIn : SchemaUp}
        onSubmit={(values, { setSubmitting }) => {
          props.mode === "signup"
            ? props
                .onSubmitClick(
                  regUserData({
                    email: values.email,
                    name: values.name,
                    password: values.password,
                  })
                )
                .then(() => props.navigate("main"))
            : props
                .onSubmitClick(
                  authUserData({
                    email: values.email,
                    password: values.password,
                  })
                )
                .then(() => props.navigate("main"));
          console.log(values);
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
        }}
      >
        <TextFormStyled>
          {props.mode === "signup" ? (
            <TextInput
              label="First Name"
              name="name"
              type="text"
              placeholder="Valentina"
            />
          ) : null}

          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="my@bujo.com"
          />

          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder=""
          />

          <Button styleComp={{ bg: "pink", textColor: "black" }} type="submit">
            {props.buttonName}
          </Button>
        </TextFormStyled>
      </Formik>
    </FormStyled>
  );
};

const ChangeFormStyled = styled.div<{ mode: string }>`
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
  style: IStyle;
  buttonTitle: string;
  handleSubmit: () => void;
}

const ChangeForm = (prop: IChangeForm) => {
  return (
    <ChangeFormStyled mode={prop.mode}>
      <Title light={true}>{prop.title}</Title>
      <Button styleComp={prop.style} onClick={prop.handleSubmit}>
        {prop.buttonTitle}
      </Button>
    </ChangeFormStyled>
  );
};

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: gray;
`;

const ContainerStyled = styled.div`
  background: url(${bgForm}) 0 0 / cover;
  width: 700px;
  height: 450px;
  position: relative;
`;

const signin = {
  title: "Sign In",
  nameButton: "Login",
  changeTitle: "Create account",
  changeButtonName: "sign up",
};

const signup = {
  title: "Sign Up",
  nameButton: "Register",
  changeTitle: "Have an account?",
  changeButtonName: "sign in",
};

const Auth = () => {
  const [mode, setMode] = useState("signin");
  const name = useSelector((state: IUser) => state.userData.name);
  const email = useSelector((state: IUser) => state.userData.email);
  const nav = useNavigate()
  useEffect(()=>{
    if(!name && !email){

    }else{
      nav('/main')
    }
  },[])

  const handleChangeButton = () => {
    mode === "signin" ? setMode("signup") : setMode("signin");
  };
  const navigate = useNavigate();
  const prop = mode === "signin" ? signin : signup;
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Overlay>
            <ContainerStyled>
              <SignupForm
                mode={mode}
                title={prop.title}
                buttonName={prop.nameButton}
                onSubmitClick={dispatch}
                navigate={navigate}
              />
              <ChangeForm
                mode={mode}
                buttonTitle={prop.changeButtonName}
                style={{ textColor: "black", bg: "pink" }}
                handleSubmit={handleChangeButton}
                title={prop.changeTitle}
              />
            </ContainerStyled>
          </Overlay>
  );
};

export default Auth;
