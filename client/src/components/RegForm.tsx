import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import React from "react";
import * as yup from "yup";
import styled from "styled-components";

// const MyTextInput = ({ title, ...props }) => {
//     const [field, meta] = useField(props);
//     return (
//         <div>
//             <label htmlFor={props.id || props.name} >{title}</label>
//             <input className='text-input' {...field} {...props} />
//             {meta.touched && meta.error ? (<div className='error'>{meta.error}</div>) : null}
//         </div>
//     )
// }
const FormStyled = styled(Form)`
  background-color: aquamarine;
`;

const RegCompStyled = styled.div`
  background-color: red;
`;

const RegComp = () => {
  return (
    <RegCompStyled>
      <h2> Registration </h2>
      <Formik
        initialValues={{
          email: "",
          name: "",
          password: "",
        }}
        validationSchema={yup.object({
          name: yup
            .string()
            .min(2, "Too Short!")
            .max(15, "Must be 15 characters or less")
            .required("This field is required"),
          email: yup
            .string()
            .email("Invalid email")
            .required("This field is required"),
          password: yup
            .string()
            .min(6, "Must have at least 6 characters")
            .required("This field is required"),
        })}
        // validate={values => {
        //     const errors: ErrorValidate = { email: '', name: '', password: '' };
        //     if (!values.email) {
        //         errors.email = 'Required';
        //     } else if ('тут будет длинная регулярка на проверку почты') {
        //         errors.email = 'Invalid email address';
        //     }
        //     return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <FormStyled>
            <label htmlFor="name">Create amaizing alias </label>
            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div" />

            <label htmlFor="email">Enter your email </label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="password">and password </label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            {/* <MyTextInput
                            title='Name'
                            name='name'
                            type='text'
                            placeholder='Your name'
                        />
                           <MyTextInput
                            title='E-mail'
                            name='email'
                            type='text'
                            placeholder='Your email'
                        />
                           <MyTextInput
                            title='Password'
                            name='password'
                            type='password'
                            placeholder='password'
                        /> */}
            <button type="submit" disabled={isSubmitting}>
              Registrate
            </button>
          </FormStyled>
        )}
      </Formik>
    </RegCompStyled>
  );
};

// const RegForm = styled(RegComp)`
//   background-color: aquamarine;
// `;

export default RegComp;
