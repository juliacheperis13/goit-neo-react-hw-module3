import { useState, useEffect } from "react";

import { v4 as uuidv4 } from 'uuid';

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";

function App() {
  const [searchRequest, setSearchRequest] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("savedContacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ];
  });

  useEffect(() => {
    window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchRequest.toLowerCase())
  );

  const handleSearchRequest = (e) => {
    setSearchRequest(e.target.value);
  };

  const handleContactSubmit = (values, actions) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { ...values, id: uuidv4() },
    ]);
    actions.resetForm();
  };

  const handleContactDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div>
      <h1 className="mainTitle">Phonebook</h1>
      <ContactForm submitHandler={handleContactSubmit} />
      <SearchBox
        searchRequest={searchRequest}
        handleChange={handleSearchRequest}
      />
      <ContactList
        contacts={filteredContacts}
        handleDelete={handleContactDelete}
      />
    </div>
  );
}

export default App;
