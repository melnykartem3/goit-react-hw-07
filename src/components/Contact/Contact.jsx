import { FaUserAlt } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';

export default function Contact({ contactData }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contactData.id));

  return (
    <>
      <div className={css.paragraphsWrapper}>
        <p className={css.contactParagraph}>
          <FaUserAlt className={css.contactIcon} size="20" />
          {contactData.name}
        </p>
        <p className={css.contactParagraph}>
          <IoCall className={css.contactIcon} size="20" />
          {contactData.number}
        </p>
      </div>
      <div className={css.buttonWrapper}>
        <button className={css.deleteBtn} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
}
