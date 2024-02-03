import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const templateParams = {
      forename: e.target.forename.value,
      surname: e.target.surname.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    emailjs
      .send(
        "service_vxcsu4d",
        "template_8iae8tg",
        templateParams,
        "P_0aHI8FhelwPjRN0"
      )
      .then((response) => {
        console.log("Email sent:", response);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Email failed to send:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div>
      <h3>CONTACT</h3>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-element">
            <label htmlFor="forename">Forename</label>
            <input
              type="text"
              className="form-control"
              id="forename"
              placeholder=" "
              required
            />
          </div>

          <div className="form-element">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              className="form-control"
              id="surname"
              placeholder=" "
              required
            />
          </div>

          <div className="form-element">
            <label htmlFor="email">E-Mail Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder=" "
              required
            />
          </div>

          <div className="form-element">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder=" "
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn custom-button"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      ) : (
        <div className="content_block">Your message was sent. Thank you!</div>
      )}
    </div>
  );
}

export default Contact;
