import React from "react";

function Footer() {
  return (
    <section className="my-5 footer flex-row">
      <a
        className="footerA"
        data-testid="link"
        href="https://github.com/RauchDavis13"
      >
        <span role="img" aria-label="GitHub">
          {" "}
        </span>{" "}
        GitHub Repository
      </a>
      <a
        className="footerA"
        data-testid="link"
        href="https://www.linkedin.com/in/ken-rauch-davis-26450b32/"
      >
        <span role="img" aria-label="GitHub">
          {" "}
        </span>{" "}
        LinkedIn
      </a>
    </section>
  );
}

export default Footer;
