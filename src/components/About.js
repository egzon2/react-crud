import React from "react";

export default function About() {
  return (
    <section className="d-flex" style={{ height: "300px" }}>
      <div className="container align-self-center">
        <h1>About Us</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <br />
          We also offer a free JSON API for anyone wanting to use it, with
          additional features for subscribers.
        </p>
        <p className="mt-5">For more informations please visit:</p>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        https://www.google.com/
        </a>
      </div>
    </section>
  );
}
