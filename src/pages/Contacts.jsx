import ContactList from 'components/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import {
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
      {isLoading && !error ? <p>Request in progress...</p> : <ContactList />}
    </div>
  );
};

export default Contacts;
