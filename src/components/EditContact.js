import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";
import { useNavigate } from "react-router-dom";

const EditContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, email, number } = location.state.contact;
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newNumber, setNewNumber] = useState(number);
  const { updateContactHandler } = useContactsCrud();

  const update = (e) => {
    e.preventDefault();
    if (newName === "" && newEmail === "") {
      alert("All the fields are mandatory");
      return;
    }
    updateContactHandler({
      id,
      name: newName,
      email: newEmail,
      number: newNumber,
    });
    setNewName();
    setNewEmail();
    setNewNumber("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h1>Edit Contact</h1>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Phone Number</label>
          <input
            type="number"
            name="number"
            placeholder="Phone Number"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <button className="ui button green">Update</button>

        <Link to={"/"}>
          <button
            className="ui button blue center"
            style={{ float: "right", marginBottom: "10px" }}
          >
            Back
          </button>
        </Link>
      </form>
    </div>
  );
};

export default EditContact;
