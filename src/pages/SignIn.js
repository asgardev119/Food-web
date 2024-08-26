import React, { useState } from "react";
import "../styles/login.css";
import { Input } from "../componant/Input";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const nevigate = useNavigate();
  const [userValue, setUserValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserValue({ ...userValue, [name]: value });
    validateForm();
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    alert("Form submitted successfully!");
    localStorage.setItem("userSignIn", JSON.stringify(userValue));
    setUserValue({
      name: "",
      email: "",
      password: "",
    });

    nevigate("/signup");
  };

  const validateForm = () => {
    let isValid = true;

    if (userValue.name.length > 20) {
      error.name = "name should be maxiue 20 character";
      isValid = false;
    } else if (!userValue.name) {
      error.name = "name required";
      isValid = false;
    } else {
      error.name = "";
    }

    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userValue.email)
    ) {
      isValid = false;
      error.email = "gmail not valid";
    } else if (!userValue.email) {
      error.email = "email required";
      isValid = false;
    } else {
      error.email = "";
    }

    if (userValue.password.length > 8) {
      isValid = false;
      error.password = "password should be 8 digit";
    } else if (!userValue.password) {
      error.password = "password required";
    } else {
      error.password = "";
    }

    return isValid;
  };

  return (
    <div>
      <form>
        <Input
          id=" name"
          name="name"
          type="text"
          label="Name"
          value={userValue.name}
          onChange={handleInputChange}
        />
        <small>{error && error.name}</small>
        <Input
          id=" email"
          name="email"
          type="email"
          label="Gmail"
          value={userValue.email}
          onChange={handleInputChange}
        />
        <small>{error && error.email}</small>
        <Input
          value={userValue.password}
          onChange={handleInputChange}
          id="password"
          name="password"
          label="password"
        />
        <small>{error && error.password}</small>

        <button type="submit" onClick={handleClick}>
          SignIn
        </button>
        <p>
          Already signin Click here 👉 <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
