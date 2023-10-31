import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail = (props) => {
  console.log(props);
    const { name, email, number } = props //props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}Sky</div>
          <div className="description">{email}sky@gmail.com</div>
          <div className="description">{number}9034923933</div>
        </div>
      </div>
      <div className="center-div">
        <Link to={"/"}>
          <button className="ui button blue center" >Back to Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
