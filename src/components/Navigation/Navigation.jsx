import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
export const Navigation = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to="/" className={css.menuItem}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={css.menuItem}>
        Contacts
      </NavLink>
    </div>
  );
};
