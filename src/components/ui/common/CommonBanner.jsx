import React from "react";
import { Container } from "reactstrap";
import "./banner.css";
const CommonBanner = ({ title }) => {
  return (
    <section className="common-section">
      <Container className="text-center">
        <h4 className="common-heading ">{title}</h4>
      </Container>
    </section>
  );
};

export default CommonBanner;
