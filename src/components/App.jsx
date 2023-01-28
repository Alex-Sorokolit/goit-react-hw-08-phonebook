// React
import { useEffect } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
// Components
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // запит всіх контактів при монтуванні App
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <>
        {isLoading && !error && <b>Request in progress...</b>}
        <Filter />
        <ContactList />
      </>
    </div>
  );
}
