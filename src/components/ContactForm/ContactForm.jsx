// React/redux
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';
// validation
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Components
import { Button } from 'components/Button/Button';
// Styles
import css from './ContactForm.module.css';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  // початковий стан для formik
  const formikInitialValue = {
    name: '',
    email: '',
    password: '',
  };

  const checkIsInContacts = newName =>
    contacts.some(({ name }) => name.toLowerCase() === newName.toLowerCase());

  // Метод виконується при сабміті форми
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    const isInContacts = checkIsInContacts(name);

    // не додаємо контакт
    if (isInContacts) {
      alert(`"${name}" is already in contacts.`);
      return;
    }

    // викликаємо генератор екшену та передаємо текст завдання для поля payload
    dispatch(addContact({ name, number }));

    // Очистка форми
    form.reset();
  };

  return (
    <div className={css.formCard}>
      <h2>New Contact</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder=" "
            required
            autoFocus
          />
        </label>

        <label className={css.label}>
          Phone
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder=" "
            required
          />
        </label>
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
}
