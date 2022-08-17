import React from "react";

import heroImage from "../../assets/images/hero.jpg";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import "./heroSection.css";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <div className="hero__left">
              <h3 className="hero__left-heading">
                Discover rate digital art and collect
                <span>sell extraordinary</span> NFTs
              </h3>
              <span className="hero__left-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus eius id asperiores veniam exercitationem culpa placeat
                natus vero blanditiis voluptatem.
              </span>
              <div className="hero__left-btn d-flex align-items-center gap-4">
                <Link
                  to={"/SellerProfile"}
                  className="d-flex align-items-center gap-2"
                >
                  <i class="ri-rocket-line"></i>
                  Explore
                </Link>
                <Link
                  to={"/Create"}
                  className="d-flex align-items-center gap-2"
                >
                  <i class="ri-pen-nib-line"></i>
                  Create
                </Link>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6" sm="12">
            <div className="hero__right">
              <img src={heroImage} alt="" className="hero__right-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
