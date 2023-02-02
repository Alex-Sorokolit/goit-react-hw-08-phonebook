import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';
import css from './Contact.module.css';
import { MdDelete } from 'react-icons/md';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  // const classNames = ['css.deleteBtn'];
  // const loading = useSelector(selectIsLoading);
  // if (loading) classNames.push('css.disabled');

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <div className={css.contactCard}>
      <p className={css.name}>
        {contact.name}: {contact.number}
      </p>
      <button
        // className={classNames.join(' ')}
        className={css.deleteBtn}
        type="buttone"
        onClick={handleDelete}
      >
        <MdDelete />
      </button>
    </div>
  );
};
