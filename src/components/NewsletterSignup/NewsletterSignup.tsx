import { useState } from "react";
import "./NewsletterSignup.scss";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        setMessage("Please enter a valid email address.");
        setIsError(true);
        return;
      } else {
        setMessage("You’re subscribed! Check your inbox for updates.");
        setIsError(false);
        setEmail("");
        setIsSuccess(true);
      }
    }, 500);
  };

  const inputClass = isError
    ? "has-error"
    : isSuccess
    ? "has-success"
    : email === ""
    ? "empty"
    : "empty";

  return (
    <div className="newsletter-signup-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="newsletter-signup">Email Address</label>
        <input
          className={inputClass}
          type="text"
          name="newsletter-signup"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {message && (
          <p
            className={`message ${
              isError ? "error-message" : "success-message"
            }`}
          >
            {message}
          </p>
        )}
        <input type="submit" value="Stay Updated" />
      </form>

      <p>Unsubscribe anytime. No spam, I promise 🙂</p>
    </div>
  );
}
