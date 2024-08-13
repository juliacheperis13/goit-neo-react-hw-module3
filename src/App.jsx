import { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";

function App() {
  const [searchRequest, setSearchRequest] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");

    return savedContacts !== null ? JSON.parse(savedContacts) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchRequest.toLowerCase())
  );

  const handleSearchRequest = (e) => {
    setSearchRequest(e.target.value);
  };

  const handleContactSubmit = (values, actions) => {
    setContacts((prevValue) => [...prevValue, { ...values, id: uuidv4() }]);
    actions.resetForm({
      name: "",
      phone: "",
    });
  };

  const handleContactDelete = (id) => {
    setContacts((prevValue) =>
      prevValue.filter((contact) => contact.id !== id)
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
