import styled from "styled-components";
import { Formik, Form, useField } from "formik";
import { colors } from "../styles/variables";
import { SchemaAuth } from "../validation";
import TextInput from "./TextInputWithLabel";
import Title from "./TitleStyled";
import Button from "./ButtonStyled";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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

interface ITextForm {
  mode: string;
  title: string;
  buttonName: string;
}

const TextFormStyled = styled(Form)<{}>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const AuthForm = (props: ITextForm) => {
  return (
    <FormStyled mode={props.mode}>
      <Title color={colors.dark}> {props.title} </Title>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={SchemaAuth}
        onSubmit={async (values, { setSubmitting }) => {
          const auth = getAuth();
          //console.log(values);
          if (props.mode === "signup") {
            const userCredentials = await createUserWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
            const user = userCredentials.user;
            console.log("user", user);
          } else {
            const userCredentials = await signInWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
            const user = userCredentials.user;
            console.log("user login", user);
          }
          values.email = "";
          values.password = "";

          //redirect
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
        }}
      >
        <TextFormStyled>
          {/* {(props.mode==="signup") ? 
  
            <MyTextInput
              label="First Name"
              name="name"
              type="text"
              placeholder="Valentina"
            /> 
            : null */}

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

          <Button bg="pink" textColor="black" type="submit">
            {" "}
            {props.buttonName}{" "}
          </Button>
        </TextFormStyled>
      </Formik>
    </FormStyled>
  );
};

export default AuthForm;
