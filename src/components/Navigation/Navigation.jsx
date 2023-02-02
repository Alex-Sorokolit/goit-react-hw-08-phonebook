import css from './Navigation.module.css';
import { NavItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <div className={css.wrapper}>
      <NavItem to="/" className={css.menuItem}>
        Home
      </NavItem>
      <NavItem to="/contacts" className={css.menuItem}>
        Contacts
      </NavItem>
    </div>
  );
};
