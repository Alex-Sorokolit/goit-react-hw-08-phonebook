import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { IoIosExit } from 'react-icons/io';
import { User } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <User>
      <p>{name}</p>
      <button
        className={css.logout}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <IoIosExit />
      </button>
    </User>
  );
};
