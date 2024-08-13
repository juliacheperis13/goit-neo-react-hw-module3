import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <li key={id} className="container">
            <Contact
              name={name}
              number={number}
              id={id}
              handleDelete={handleDelete}
            />
          </li>
        ))
      ) : (
        <p className={css.message}>No contacts found</p>
      )}
    </ul>
  );
};

export default ContactList;
