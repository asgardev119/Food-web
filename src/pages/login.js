import React, { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [userValue, setUserValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleClick = () => {
    let firstnameError = "sasakl";
    console.log(firstnameError);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserValue({ ...userValue, [name]: value });
    console.log(userValue);
  };

  return (
    <div>
      <form>
        <div className="userInfo">
          <label for="firstname">Fisrt Name:</label>
          <input
            id=" firstname"
            name="firstname"
            type="text"
            autoComplete="off"
            value={userValue.firstname}
            onChange={handleInputChange}
          />
        </div>
        <small>{error.firstname}</small>
        <div className="userInfo">
          <label>last Name:</label>
          <input
            id=" lastname"
            name="lastname"
            type="text"
            autoComplete="off"
            value={userValue.lastname}
            onChange={handleInputChange}
          />
        </div>
        <div className="userInfo">
          <label>Gmail:</label>
          <input
            id=" email"
            name="email"
            type="email"
            autoComplete="off"
            value={userValue.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="userInfo">
          <label>Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            value={userValue.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="userInfo">
          <label>Confirm Password:</label>
          <input
            id=" password"
            name="confirmpassword"
            type="password"
            autoComplete="off"
            value={userValue.confirmpassword}
            onChange={handleInputChange}
          />
        </div>

        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
