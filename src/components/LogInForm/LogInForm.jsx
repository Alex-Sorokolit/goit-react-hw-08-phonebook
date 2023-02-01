import { useDispatch } from 'react-redux';
import css from './LogInForm.module.css';
import { logIn } from 'redux/auth/auth-operations';
import { SubmitBtn } from 'components/SubmitBtn/SubmitBtn';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <form
        className={css.form}
        onSubmit={handleSubmit}
        name="login_form"
        autoComplete="off"
      >
        <label className={css.label}>
          Email
          <p className={css.description}>Enter E-mail address</p>
          <input
            className={css.input}
            type="email"
            name="email"
            required
            autoFocus
            placeholder=" "
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Example: wick@mail.com"
          ></input>
        </label>
        <label className={css.label}>
          Password
          <p className={css.description}>
            Must have at least 7 characters (1 character uppercase , 1 lowercase
            and 1 number)
          </p>
          <input
            className={css.input}
            type="password"
            name="password"
            required
            minLength="7"
            maxLength="12"
            placeholder=" "
            // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
            // title="Example: Xn2isL0"
          ></input>
        </label>
        <SubmitBtn>LogIn</SubmitBtn>
      </form>
    </div>
  );
};
