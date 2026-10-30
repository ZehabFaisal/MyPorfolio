import React, { useState } from "react";
import "./Contact.css";
import ContactImage from "../../assets/contact-image.jpg";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
        "service_uv1kn2g",
        "template_oz9oxzw",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YfaVwNeGV8_RJ74zh" 
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    })
      .catch((error) => {
        console.log(error);
        alert("An error occurred! Failed to send message.");
      });
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact-image">
        <img src={ContactImage} alt="Contact" />
      </div>

      <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2> GET IN TOUCH! </h2>

          <div className="form-group">
            <label> Name </label>
            <input type="text" name="name" placeholder="Enter your name..." value={formData.name}
              onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label> Email </label>
            <input type="email" name="email" placeholder="Enter your email address..." value={formData.email}
              onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label> Message </label>
            <textarea rows="5" name="message" placeholder="Write your message..." value={formData.message}
              onChange={handleChange} required > </textarea>
          </div>

          <button type="submit"> Submit </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;