import css from './LogIn.module.css';
export const LogIn = () => {
  return (
    <div>
      <form className={css.form}>
        <label className={css.label}>
          Email
          <input type="text" name="email"></input>
        </label>
        <label className={css.label}>
          Password
          <input type="text" name="password"></input>
        </label>
      </form>
    </div>
  );
};
