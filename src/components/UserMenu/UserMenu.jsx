import css from './UserMenu.module.css'

export const UserMenu = () => {
  return (
    <div className={css.wrapper}>
      <p>mango@mail.com</p>
      <button>Logout</button>
    </div>
  );
};
