import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import styled, { keyframes } from "styled-components";
import GlobalStyles from "../global";
import { colors } from "../variables";
import bgForm from "../../public/images/sunset.jpg";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: transparent;
`;

const FormStyled_reg = styled(Form)<{ $isLogin: boolean }>`
  position: absolute;
  left: ${({ $isLogin }) => ($isLogin ? "50%" : "0px")};
  display: ${({ $isLogin }) => ($isLogin ? "none" : "flex")};
  // z-index: ${({ $isLogin }) => ($isLogin ? 0 : 20)};
  top: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 0;
  padding: 10px 30px;
  opacity: ${({ $isLogin }) => ($isLogin ? 0 : 1)};
  transition: all 1s;
  background-color: ${colors.light};
`;

const FormStyled_login = styled(FormStyled_reg)`
  opacity: ${({ $isLogin }) => ($isLogin ? 1 : 0)};
  display: ${({ $isLogin }) => ($isLogin ? "flex" : "none")};
`;

const RegCompStyled = styled.div`
  background: url(${bgForm}) 0 0 / cover;
  width: 700px;
  height: 450px;
  position: relative;
`;

const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
`;

const ChangeForm = styled.div<{ $isLogin: boolean }>`
  opacity: ${({ $isLogin }) => ($isLogin ? 1 : 0)};
  display: ${({ $isLogin }) => ($isLogin ? "flex" : "none")};
  //display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  width: 50%;
  height: 100%;
`;

const ChangeFormForLogin = styled(ChangeForm)`
  opacity: ${({ $isLogin }) => ($isLogin ? 0 : 1)};
  display: ${({ $isLogin }) => ($isLogin ? "none" : "flex")};
  position: absolute;
  top: 0;
  left: 50%;
`;

const Title = styled.h2<{ light: boolean }>`
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: ${({ light }) => (light ? colors.light : colors.dark)};
`;

const Button = styled.button<{ isSubmit: boolean }>`
  padding: 5px 15px;
  font-size: 16px;
  border: none;
  color: ${({ isSubmit }) => (isSubmit ? colors.dark : colors.bright)};
  background-color: ${({ isSubmit }) =>
    isSubmit ? colors.bright : colors.dark};
`;

const Schema = yup.object({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(15, "Must be 15 characters or less")
    .required("This field is required"),
  email: yup.string().email("Invalid email").required("This field is required"),
  password: yup
    .string()
    .min(6, "Must have at least 6 characters")
    .required("This field is required"),
});

const RegComp = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <GlobalStyles />
      <Overlay>
        <RegCompStyled>
          <Formik
            //key="reg-form"
            initialValues={{
              email_reg: "",
              name_reg: "",
              password_reg: "",
            }}
            validationSchema={Schema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
            }}
          >
            {({ isSubmitting }) => (
              <FormStyled_reg $isLogin={isLogin} key="reg-form">
                <Title light={false}> Sign Up </Title>
                <label htmlFor="name_reg">Create amaizing alias </label>
                <Field type="text" name="name_reg" />
                <ErrorMessageStyled name="name_reg" component="div" />

                <label htmlFor="email_reg">Enter your email </label>
                <Field type="email" name="email_reg" />
                <ErrorMessageStyled name="email_reg" component="div" />

                <label htmlFor="password_reg">and password </label>
                <Field type="password" name="password_reg" />
                <ErrorMessageStyled name="password_reg" component="div" />

                <Button isSubmit={true} type="submit" disabled={isSubmitting}>
                  Register
                </Button>
              </FormStyled_reg>
            )}
          </Formik>

          <ChangeFormForLogin $isLogin={isLogin}>
            <Title light={true}>Have an account?</Title>
            <Button
              isSubmit={false}
              onClick={() => {
                setIsLogin(true);
              }}
            >
              Sign in
            </Button>
          </ChangeFormForLogin>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Schema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
            }}
          >
            {({ isSubmitting }) => (
              <FormStyled_login $isLogin={isLogin}>
                <Title light={false}> Sign In</Title>
                <label htmlFor="email">Your email </label>
                <Field type="email" name="email" />
                <ErrorMessageStyled name="email" component="div" />

                <label htmlFor="password">Password </label>
                <Field type="password" name="password" />
                <ErrorMessageStyled name="password" component="div" />

                <Button isSubmit={true} type="submit" disabled={isSubmitting}>
                  Login
                </Button>
              </FormStyled_login>
            )}
          </Formik>
          <ChangeForm $isLogin={isLogin}>
            <Title light={true}>Create account</Title>
            <Button isSubmit={false} onClick={() => setIsLogin(false)}>
              Sign up
            </Button>
          </ChangeForm>
        </RegCompStyled>
      </Overlay>
    </>
  );
};

export default RegComp;
