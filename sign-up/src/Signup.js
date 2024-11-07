import React, { useState } from "react";
import "./Signup.css";
function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
  };
  return (
    <form className="signup-card" onSubmit={(e)=>handleSubmit(e)}>
      <h1>Registration form</h1>
      <label>First Name</label>
      <input
        type="text"
        placeholder="First name"
        name="firstName"
        id="firstName"
        value={formData.firstName}
        onChange={(e) => handleInputChange(e)}
      ></input>
      <label>Last Name</label>
      <input
        type="text"
        placeholder="Last name"
        name="lastName"
        id="lastName"
        value={formData.lastName}
        onChange={(e) => handleInputChange(e)}
      ></input>
      <label>Email</label>
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        value={formData.email}
        onChange={(e) => handleInputChange(e)}
      ></input>
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        value={formData.password}
        onChange={(e) => handleInputChange(e)}
      ></input>
      <button type="submit">
        <span>Sign up</span>
      </button>
    </form>
  );
}

export default Signup;
