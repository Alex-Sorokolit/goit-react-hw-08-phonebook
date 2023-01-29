import css from './RegisterForm.module.css';
export const RegisterForm = () => {
  return (
    <div>
      <form className={css.form}>
        <label className={css.label}>
          Username
          <input type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <input type="text" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="text" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
