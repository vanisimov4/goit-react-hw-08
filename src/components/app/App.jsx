import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '../../redux/contacts/operations';
import Layout from '../Layout/Layout';
// import ContactForm from '../contactForm/ContactForm';
// import SearchBox from '../searchBox/SearchBox';
// import ContactList from '../contactList/ContactList';
// import {
//   selectContacts,
//   selectLoading,
//   selectError,
// } from '../../redux/contacts/selectors';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import css from './App.module.css';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);

function App() {
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  // const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // Викликаємо операцію
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <div className={css.wrapper}>
      <Layout>
        <h1>Phonebook</h1>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
        {/* <ContactForm />
        <SearchBox />
        {loading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        {contacts.length && <ContactList />} */}
      </Layout>
    </div>
  );
}

export default App;
