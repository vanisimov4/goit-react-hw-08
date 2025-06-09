import { useSelector } from 'react-redux';
import Contact from '../contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/slice';
import css from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
