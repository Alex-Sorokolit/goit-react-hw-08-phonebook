import ContactList from 'components/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add Contact</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
    </div>
  );
};
