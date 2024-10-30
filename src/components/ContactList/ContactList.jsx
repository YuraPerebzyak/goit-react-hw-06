import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";

import { selectContacts } from "../../redux/contacts/contactSlice";
import { selectNameFilter } from "../../redux/filter/filterSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase().trim());
  });

  return (
    <ul>
      {filteredContacts.map((item) => (
        <Contact
          key={item.id}
          name={item.name}
          number={item.number}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
