import React, { useRef, useState } from "react";
import "./contactform.css";
import emailjs from "@emailjs/browser";
export default function ContactForm() {
  const form = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ua40nmf",
        "template_7h0g6z4",
        form.current,
        "bOLzQCK35NNwyXcdJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <form ref={form} className="form" onSubmit={handleSubmit}>
        <label> Your Name</label>
        <input
          className="user"
          type="text"
          placeholder="Name"
          name="user_name"
        />
        <label>Email</label>
        <input
          className="user"
          type="email"
          placeholder="Email"
          name="user_email"
        />
        <label>Subject</label>
        <input type="text" />
        <label>Drop a note</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Type your text here..."
          type="text"
        />
        <button type="submit" className="btn">
          Submit
        </button>
        <span>{done ? "Thanks for contacting me" : ""}</span>
      </form>
    </div>
  );
}
