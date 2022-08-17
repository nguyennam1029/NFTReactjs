import React, { useState } from "react";

import { Link } from "react-router-dom";

import ModalNft from "../Modal/Modal";

const AuctionCart = (props) => {
  const [modal, setModal] = useState(false);

  const { id, title, desc, imgUrl, creator, creatorImg, currentBid } =
    props.item;
  return (
    <div className="auction__item">
      <div className="auction__item__top">
        <img src={imgUrl} alt="" />
      </div>
      <div className="auction__item__body">
        <Link to={`/Market/${id}`}>
          <h5>{title}</h5>
        </Link>
        <div className="info_wrapper d-flex align-items-center">
          <div className="info-left">
            <img src={creatorImg} alt="" />
          </div>
          <div className="info-right d-flex align-items-center justify-content-between w-100">
            <div>
              <span className="info__right-title">Created by</span>
              <h6 className="info__right-name">{creator}</h6>
            </div>
            <div>
              <span className="info__right-title">Current bid</span>
              <h6 className="info__right-name">{currentBid} ETH</h6>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-4">
          <Link
            to={"#"}
            className="d-flex align-items-center btn__bid gap-2"
            onClick={() => setModal(true)}
          >
            <i class="ri-shopping-bag-line"></i>
            Place Bid
          </Link>
          <Link to={"#"} className="btn__view">
            View story
          </Link>
        </div>
      </div>
      {modal && <ModalNft setModal={setModal} />}
    </div>
  );
};

export default AuctionCart;
