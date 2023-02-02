import { useDispatch, useSelector } from 'react-redux';
import css from './RegisterForm.module.css';
import { register } from 'redux/auth/auth-operations';
import { Button } from 'components/Button/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { selectIsLoading, selectError } from 'redux/auth/auth-selectors';
import BarLoader from 'react-spinners/BarLoader';
import { reLogIn } from 'redux/auth/auth-operations';
import { useEffect } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(reLogIn());
  }, [dispatch]);

  // початковий стан для formik
  const formikInitialValue = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    dispatch(register(values));
    actions.resetForm();
  };

  // Валідація
  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required(),
    email: Yup.string().trim().email().required(),
    password: Yup.string()
      .min(7, 'Password must contain at least 7 characters')
      .max(16, 'Password must contain no more than 16 characters')
      .required(),
  });

  return (
    <div className={css.formCard}>
      <h2>Register</h2>
      <Formik
        initialValues={formikInitialValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <Form
            className={css.form}
            onSubmit={handleSubmit}
            name="register_form"
            autoComplete="off"
          >
            <label className={css.label}>
              Username
              <Field
                className={css.input}
                type="text"
                name="name"
                required
                autoFocus
                placeholder=" "
                // pattern="^[a-zA-Z]+\s[a-zA-Z]+$"
              />
              <ErrorMessage
                name="name"
                component="p"
                className={css.inputError}
              />
            </label>
            <label className={css.label}>
              Email
              <Field
                className={css.input}
                type="email"
                name="email"
                required
                placeholder=" "
              />
              <ErrorMessage
                name="email"
                component="p"
                className={css.inputError}
              />
            </label>
            <label className={css.label}>
              Password
              <Field
                className={css.input}
                type="password"
                name="password"
                required
                minLength="7"
                maxLength="16"
                placeholder=" "
              />
              <ErrorMessage
                name="password"
                component="p"
                className={css.inputError}
              />
            </label>
            <Button>Register</Button>
          </Form>
        )}
      </Formik>

      {isLoading && !error && <BarLoader color="#5ac846" width="100%" />}

      {error && (
        <p className={css.ErrorMessage}>
          Error, this email is already registered
        </p>
      )}
    </div>
  );
};
