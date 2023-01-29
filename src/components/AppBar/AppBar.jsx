import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <div className={css.wrapper}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </div>
  );
};
