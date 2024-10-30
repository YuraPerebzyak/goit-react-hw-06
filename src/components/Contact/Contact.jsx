import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
