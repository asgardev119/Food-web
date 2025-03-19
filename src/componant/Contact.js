import React from "react";

const Contact = () => {
  const mainStyle = {
    width: "90%",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const labelStyle = {
    fontWeight: "bold",
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    width: "100%",
  };

  const textareaStyle = {
    width: "100%",
    ...inputStyle,
    resize: "none",
  };

  const buttonStyle = {
    backgroundColor: "",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "4px",
    fontSize: "18px",
    cursor: "pointer",
  };

  return (
    <div>
      <main style={mainStyle}>
        <form>
          <label htmlFor="name" style={labelStyle}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            style={inputStyle}
          />

          <label htmlFor="email" style={labelStyle}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />

          <label htmlFor="message" style={labelStyle}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            style={textareaStyle}
          ></textarea>

          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
