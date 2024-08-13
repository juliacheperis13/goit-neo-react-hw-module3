import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

const Contact = ({ name, number, id, handleDelete }) => {
  return (
    <div className={css.contact}>
      <div>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button
        onClick={() => handleDelete(id)}
        className="button secondary selfCenter"
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
