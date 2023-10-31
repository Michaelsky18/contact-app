import React, { useState } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const { addContactHandler } = useContactsCrud();
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" && email === "") {
      alert("All the fields are mandatory");
      return;
    }
    addContactHandler({ name, email, number });
    setName("");
    setEmail("");
    setNumber("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h1>Add Contact</h1>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Phone Number</label>
          <input
            type="number"
            name="number"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button
          className="ui button green"
          style={{ float: "left", marginBottom: "10px" }}
        >
          Add
        </button>

        {/* <Link to={"/"}>
          <button
            className="ui button blue center"
            style={{ float: "right", marginBottom: "10px" }}
          >
            Back
          </button>
        </Link> */}
      </form>
    </div>
  );
};

export default AddContact;
