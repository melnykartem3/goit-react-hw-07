import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import { fetchContacts } from '../redux/contactsOps';
import Loader from '../components/Loader/Loader';
import Error from './Error/Error';
import { selectLoading } from '../redux/contactsSlice';
import { selectError } from '../redux/contactsSlice';
import { selectContacts } from '../redux/contactsSlice';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <SearchBox />}
      {contacts.length > 0 && <ContactList />}
      {error && <Error></Error>}
      {loading && <Loader />}
    </div>
  );
}
