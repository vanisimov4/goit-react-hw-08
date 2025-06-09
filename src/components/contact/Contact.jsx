import { useDispatch } from 'react-redux';
import { IoCall, IoPerson } from 'react-icons/io5';

import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.contact}>
      <div>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <IoCall /> {number}
        </p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
