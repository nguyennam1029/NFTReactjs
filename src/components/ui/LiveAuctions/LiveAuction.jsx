import React from "react";

import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import { NFT__DATA } from "../../../assets/data/data";
import AuctionCart from "../AuctionCart/AuctionCart";

import "./liveAuction.css";

const LiveAuction = () => {
  return (
    <section className="live__auction">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="auction__top d-flex align-items-center justify-content-between w-100">
              <h4 className="auction__top-name">Live Auction</h4>
              <Link to={"#"} className="auction__top-link">
                Explore more
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="auction__list">
          {NFT__DATA.slice(0, 4).map((item) => (
            <Col lg="3" md="6" sm="12">
              <AuctionCart item={item} key={item.id} />;
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;
