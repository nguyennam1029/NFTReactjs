import { React, useState } from "react";
import CommonBanner from "../components/ui/common/CommonBanner";

import { Container, Row, Col } from "reactstrap";

import AuctionCart from "../components/ui/AuctionCart/AuctionCart";
import { NFT__DATA } from "../assets/data/data";

import "../styles/market.css";
const Market = () => {
  const [data, setData] = useState(NFT__DATA);
  const handleSort = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "hight") {
      const filterData = NFT__DATA.filter((item) => item.currentBid >= 6);
      setData(filterData);
    }
    if (filterValue === "mid") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 5.5 && item.currentBid < 6
      );
      setData(filterData);
    }
    if (filterValue === "low") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 4 && item.currentBid < 5.5
      );
      setData(filterData);
      console.log("filterData", filterData);
    }
    if (filterValue === "all") {
      setData(NFT__DATA);
    }
  };

  return (
    <>
      <section className="market-section">
        <CommonBanner title={"Market"} />
        <Container>
          <Row>
            <Col
              lg="12"
              className="d-flex align-items-center justify-content-between list__fillter"
            >
              <div className="fillter__left d-flex align-items-center gap-5">
                <div className="fillter__item">
                  <select id="cars">
                    <option>All categories</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>

                <div className="fillter__item">
                  <select id="cars">
                    <option>All teams</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="fillter__right">
                <div className="fillter__item">
                  <select id="cars" onChange={handleSort}>
                    <option value="all">Sort by</option>
                    <option value="hight">Hight rate</option>
                    <option value="mid">Mid rate</option>
                    <option value="low">Low rate</option>
                  </select>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            {data.map((item) => (
              <Col key={item.id} lg="3" md="4" sm="6" className="market__item">
                <AuctionCart item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;
