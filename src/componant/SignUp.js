import React, { useEffect, useState } from "react";
import { Input } from "./Input";
import { Link, useNavigate } from "react-router-dom";
export const SignUp = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [userValue, setUserValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    cred: "",
  });

  const [storedUser, setStoredUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userSignIn");
    if (storedUser) {
      setStoredUser(JSON.parse(storedUser));
    }
  }, []);

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
    if (
      storedUser &&
      storedUser.email === userValue.email &&
      storedUser.password === userValue.password
    ) {
      navigate("/dashboard");
      error.cred = "";
      setIsLoggedIn(true);
    } else {
      // alert("Invalid credentials");
      error.cred = "Invalid credentials";
    }

    setUserValue({
      email: "",
      password: "",
    });
  };

  const validateForm = () => {
    let isValid = true;

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
          id=" email"
          name="email"
          type="email"
          label="Gmail"
          value={userValue.email}
          onChange={handleInputChange}
        />
        <small> {error && error.email}</small>
        <Input
          value={userValue.password}
          onChange={handleInputChange}
          id="password"
          name="password"
          label="password"
        />
        <small> {error && error.password}</small>
        <small> {error && error.cred}</small>

        <button type="submit" onClick={handleClick}>
          SignUp
        </button>
        <p>
          Create New Profile Click here 👉 <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
};
