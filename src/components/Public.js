import { Link } from "react-router-dom";

import React from "react";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Simon Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Nehru Place, New Delhi. Simon Repairs provides a trained
          staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Simon Repairs!
          <br />
          Nehru Place
          <br />
          New Delhi - 110019
          <br />
          <a href="tel:+91-9876543210">(+91)9876543210</a>
        </address>
        <br />
        <p>Owner: Simon Edward</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
