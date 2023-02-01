import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const classNames = ['css.deleteBtn'];
  const loading = useSelector(selectIsLoading);
  if (loading) classNames.push('css.disabled');
  const handleDelete = ({}) => dispatch(deleteContact(contact.id));
  return (
    <div className={css.wrapper}>
      <p className={css.name}>
        {contact.name}: {contact.number}
      </p>
      <button
        className={classNames.join(' ')}
        type="buttone"
        onClick={handleDelete}
      >
        Remove
      </button>
    </div>
  );
};

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ['alert', variant];
//   if (outlined) classNames.push('is-outlined');
//   if (elevated) classNames.push('is-elevated');

//   return <p className={classNames.join(' ')}>{children}</p>;
// };
