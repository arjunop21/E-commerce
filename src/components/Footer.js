import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 text-center">
      <Container>
        <p>&copy; {new Date().getFullYear()} E-Commerce App</p>
      </Container>
    </footer>
  );
};

export default Footer;
