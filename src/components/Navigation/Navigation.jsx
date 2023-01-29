import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
export const Navigation = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </div>
  );
};
