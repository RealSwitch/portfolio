import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      {submitted ? (
        <p>Thank you! I'll get back to you soon.</p>
      ) : (
        <form
          action="https://formspree.io/f/xqaywyyd"
          method="POST"
          target="_blank"
          onSubmit={() => setSubmitted(true)}
        >
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required />
          </label>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}