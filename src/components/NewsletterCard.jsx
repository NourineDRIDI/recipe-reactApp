import React, { useState } from "react";

function NewsletterCard() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
  };

  return (
    <div className="newsletter card my-3 py-5" style={{ backgroundColor: "#FFF0ED" }}>
      <div className="card-body">
        <h5 className="card-title text-center">Let's Stay In Touch!</h5>
        <p className="text-center">
          Join our newsletter, so that we reach out to you with our news and offers.
        </p>
        <div className="d-flex justify-content-center">
          <form id="newsletterForm" className="d-flex" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="btn btn-primary ms-2"
              style={{ backgroundColor: "#B66055", borderColor: "#B66055", color: "white" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsletterCard;
