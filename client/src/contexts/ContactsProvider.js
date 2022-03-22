import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ContactsContext = React.createContext();

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  function createContact(id, name) {
    setContacts((prev) => {
      return [...prev, { id, name }];
    });
  }

  return <ContactsContext.Provider value={{ contacts, createContact }}>{children}</ContactsContext.Provider>;
}
