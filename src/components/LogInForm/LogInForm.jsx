import { useDispatch } from 'react-redux';
import css from './LogInForm.module.css';
import { logIn } from 'redux/auth/auth-operations';

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
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Email
          <input type="email" name="email"></input>
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password"></input>
        </label>
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};
