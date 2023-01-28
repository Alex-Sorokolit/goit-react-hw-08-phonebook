import React from 'react';
import './ContactList.css';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ul className="contact__list">
        {visibleContacts.map(contact => (
          <li key={contact.id} className="contact__item">
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
