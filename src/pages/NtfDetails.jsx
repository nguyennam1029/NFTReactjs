import React from "react";

import { useParams } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from "../assets/data/data";
import CommonBanner from "../components/ui/common/CommonBanner";
import LiveAuction from "../components/ui/LiveAuctions/LiveAuction";

import "../styles/detail.css";
const NtfDetails = () => {
  const { id } = useParams();
  const singleNft = NFT__DATA.find((item) => item.id === id);
  return (
    <>
      <section>
        <CommonBanner title={singleNft.title} />
        <Container>
          <Row className="mt-5">
            <Col lg="6">
              <div className="detail_img">
                <img src={singleNft.imgUrl} alt="" className="" />
              </div>
            </Col>
            <Col lg="6" className="detail__right">
              <h6 className="detail__right-title">{singleNft.title}</h6>
              <div className="list__action d-flex align-items-center justify-content-between">
                <div className="list__action-left d-flex align-items-center gap-3">
                  <div className="item__action">
                    <i class="ri-eye-line"></i>
                    <span>234</span>
                  </div>
                  <div className="item__action">
                    <i class="ri-heart-line"></i>
                    <span>789</span>
                  </div>
                </div>

                <div className="list__action-right d-flex align-items-center gap-3">
                  <div className="item__action">
                    <i class="ri-telegram-line"></i>
                  </div>
                  <div className="item__action">
                    <i class="ri-more-2-line"></i>
                  </div>
                </div>
              </div>

              <div className="detail__user d-flex align-items-center gap-3">
                <img src={singleNft.creatorImg} alt="" />
                <div className="detail__info">
                  <span className="detail__info-title">Created by</span>
                  <h6 className="detail__info-name">{singleNft.creator}</h6>
                </div>
              </div>
              <span className="detail__desc">{singleNft.desc}</span>
              <button className="detail__btn d-flex align-items-center justify-content-center text-center">
                <i class="ri-shopping-bag-line"></i>
                Place a Bid
              </button>
            </Col>
          </Row>
          <LiveAuction />
        </Container>
      </section>
    </>
  );
};

export default NtfDetails;
