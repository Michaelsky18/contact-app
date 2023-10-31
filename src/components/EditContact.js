import React from "react";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    //need work
    const { id, name, email, number } = props;
    this.state = {
      id,
      name,
      email,
      number,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "", number: "" });
    console.log(this.props);
    //need work
    //this.props.Component.push("/")
  };

  render() {
    return (
      <div className="ui main">
        <h1>Edit Contact</h1>
        <form className="ui form" onSubmit={this.update}>
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
  }
}

export default EditContact;
