import { createContext, useContext, useState } from "react";
import api from "../api/contacts";
import { v4 as uuid } from "uuid"; // Use the correct import for UUID

const contactsCrudContext = createContext();

export function ContactsCrudContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [contact] = useState({}); // Initialize contact state with an empty object
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //const setContact = () => {};

  // RetrieveContacts
  const retrieveContacts = async () => {
    try {
      const response = await api.get("/contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Error retrieving contacts:", error);
    }
  };

  //add contacts
  const addContactHandler = async (newContact) => {
    try {
      const request = {
        id: uuid(),
        ...newContact,
      };
      const response = await api.post("/contacts", request);
      setContacts([...contacts, response.data]);
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  //Delete contacts
  const removeContactHandler = async (id) => {
    try {
      await api.delete(`/contacts/${id}`);
      const newContactList = contacts.filter((contact) => contact.id !== id);
      setContacts(newContactList);
    } catch (error) {
      console.error("Error removing contact:", error);
    }
  };

  //update Contacts
  const updateContactHandler = async (updatedContact) => {
    try {
      const response = await api.put(
        `/contacts/${updatedContact.id}`,
        updatedContact
      );
      const { id } = response.data;
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === id ? { ...response.data } : contact
        )
      );
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  //search contacts
  const searchHandler = (searchTerm) => {
    setText(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  const value = {
    contact,
    contacts,
    retrieveContacts,
    addContactHandler,
    removeContactHandler,
    updateContactHandler,
    searchHandler,
    text,
    searchResults,
  };

  return (
    <contactsCrudContext.Provider value={value}>
      {children}
    </contactsCrudContext.Provider>
  );
}

export function useContactsCrud() {
  return useContext(contactsCrudContext);
}
