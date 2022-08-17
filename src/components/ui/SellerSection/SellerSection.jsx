import React from "react";

import { Container, Row, Col } from "reactstrap";

//Data
import { SELLER__DATA } from "../../../assets/data/data";

//CSS
import "./seller.css";
const SellerSection = () => {
  return (
    <section className="seller">
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="seller__heading">Top Seller</h4>
          </Col>
        </Row>
        <Row>
          {SELLER__DATA.map((item) => (
            <Col lg="2" md="4" sm="6" key={item.id} className="mt-5">
              <div className="seller__item d-flex align-items-center gap-3">
                <div className="seller__item-img">
                  <img src={item.sellerImg} alt="" />
                </div>
                <div className="seller__item-info">
                  <h6 className="seller__item-name">{item.sellerName}</h6>
                  <span className="seller__item-price">
                    {item.currentBid} ETH
                  </span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SellerSection;
