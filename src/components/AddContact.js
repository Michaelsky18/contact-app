import React from "react";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    number: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", number: "" });
    console.log(this.props);
    //this.props.history.push("/");
    //useNavigate("/");
  };

  render() {
    return (
      <div className="ui main">
        <h1>Add Contact</h1>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              value={this.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}
            />
          </div>
          <button className="ui button green" style={{ float:"left",marginBottom:"10px" }}>Add</button>
         
        <Link to={"/"}>
          <button className="ui button blue center" style={{float:"right", marginBottom:"10px" }}>Back</button>
        </Link>
      
        </form>
      
      </div>
    );
  }
}

export default AddContact;
