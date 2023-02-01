import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { register } from 'redux/auth/auth-operations';
import { SubmitBtn } from 'components/SubmitBtn/SubmitBtn';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formikInitialValue = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmit = values => {
    console.log(values);
    dispatch(register(values));
    // event.preventDefault();
    // const form = event.currentTarget;
    // dispatch(
    //   register({
    //     name: form.elements.name.value,
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    // form.reset();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(7, 'Password must contain at least 7 characters')
      .required(),
  });

  return (
    <Formik initialValues={formikInitialValue} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <Form
          className={css.form}
          onSubmit={handleSubmit}
          name="register_form"
          autoComplete="off"
        >
          <label className={css.label}>
            Username
            <p className={css.description}>
              Username must consist of two words, first name and last name,
              separated by a space.
            </p>
            <Field
              className={css.input}
              type="text"
              name="name"
              required
              autoFocus
              placeholder=" "
              // pattern="^[a-zA-Z]+\s[a-zA-Z]+$"
              // title="Example: John Wick"
            />
          </label>
          <label className={css.label}>
            Email
            <p className={css.description}>Enter E-mail address</p>
            <Field
              className={css.input}
              type="email"
              name="email"
              required
              placeholder=" "
              // pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              // title="Example: wick@mail.com"
            />
          </label>
          <label className={css.label}>
            Password
            <p className={css.description}>
              Must have at least 7 characters (1 character uppercase , 1
              lowercase and 1 number)
            </p>
            <Field
              className={css.input}
              type="password"
              name="password"
              required
              // minLength="7"
              // maxLength="12"
              placeholder=" "
              // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
              // title="Example: Xn2isL0"
            />
          </label>
          <SubmitBtn>Register</SubmitBtn>
        </Form>
      )}
    </Formik>
  );
};
