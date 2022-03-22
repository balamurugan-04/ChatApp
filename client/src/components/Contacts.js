import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { ContactsContext } from "../contexts/ContactsProvider";

function Contacts() {
  const { contacts } = useContext(ContactsContext);

  return (
    <ListGroup variant="flush">
      {contacts.map((contact) => (
        <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Contacts;
