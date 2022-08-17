import React from "react";
import { Container, Row, Col } from "reactstrap";

//Data
import { NFT__DATA } from "../../../assets/data/data";
//Cart Item
import AuctionCart from "../AuctionCart/AuctionCart";
//CSS
import "./trending.css";
const TrendingSection = () => {
  return (
    <section className="trending">
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="trending__heading">Trending</h4>
          </Col>
        </Row>
        <Row>
          {NFT__DATA.slice(0, 8).map((item) => (
            <Col lg="3" md="6" sm="12">
              <AuctionCart item={item} key={item.id} />;
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TrendingSection;
