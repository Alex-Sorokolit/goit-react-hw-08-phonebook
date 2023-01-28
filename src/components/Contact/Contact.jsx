import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import './Contact.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <div className="contact_wrapper">
      <p className="contact__name">
        {contact.name}: {contact.phone}
      </p>
      <button className="contact__button" type="buttone" onClick={handleDelete}>
        Remove
      </button>
    </div>
  );
};
