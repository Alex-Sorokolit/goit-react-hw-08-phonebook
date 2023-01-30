import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <div className={css.wrapper}>
      <p>{name}</p>
      <button
        className={css.logout}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
