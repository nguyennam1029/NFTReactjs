import React from "react";

import "./modal.css";
const Modal = ({ setModal }) => {
  return (
    <div class="modal">
      <div class="modal-overlay" onClick={() => setModal(false)}></div>
      <div class="modal-content">
        <span class="modal-close" onClick={() => setModal(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <div class="modal-main">
          <div className="modal-main--top text-center">
            <h6>Place a bid</h6>
            <p>
              you must bid at least <span>5.98 ETH</span>
            </p>
          </div>
          <div className="modal-main--body">
            <div className="input-item">
              <input type="number" placeholder="00 : 00 ETH" />
            </div>
            <div className="input-item">
              <input type="number" placeholder="Enter quantity" />
            </div>
            <div className="d-flex align-items-center justify-content-between mt-5">
              <p className="modal-main--title">you must bid at least</p>
              <span className="modal-main--price">5.89 ETH</span>
            </div>

            <div className="d-flex align-items-center justify-content-between mt-3">
              <p className="modal-main--title">Service Free</p>
              <span className="modal-main--price">0.89 ETH</span>
            </div>

            <div className="d-flex align-items-center justify-content-between mt-3">
              <p className="modal-main--title">you must bid at least</p>
              <span className="modal-main--price">5.89 ETH</span>
            </div>
          </div>
          <button className="modal-btn">Place a Bid</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
