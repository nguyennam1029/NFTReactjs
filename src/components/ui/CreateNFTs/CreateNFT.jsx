import React from "react";
import { Container, Row, Col } from "reactstrap";

//CSS
import "./create.css";

//Data
const creates = [
  {
    id: "01",
    title: "Setup your wallet ",
    icon: <i class="ri-wallet-2-line"></i>,
    des: "They say as long as at least one person cares for you, life isn’t a waste. So when things go terribly wrong, and you feel like giving up, please remember you still got me.",
  },
  {
    id: "02",
    title: "Create your collection",
    icon: <i class="ri-layout-masonry-line"></i>,
    des: "They say as long as at least one person cares for you, life isn’t a waste. So when things go terribly wrong, and you feel like giving up, please remember you still got me.",
  },
  {
    id: "03",
    title: "Add your NFTs",
    icon: <i class="ri-image-line"></i>,
    des: "They say as long as at least one person cares for you, life isn’t a waste. So when things go terribly wrong, and you feel like giving up, please remember you still got me.",
  },
  {
    id: "04",
    title: "List theme for sale",
    icon: <i class="ri-list-unordered"></i>,
    des: "They say as long as at least one person cares for you, life isn’t a waste. So when things go terribly wrong, and you feel like giving up, please remember you still got me.",
  },
];
const CreateNFT = () => {
  return (
    <section className="create">
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="create__heading">Create and sell your NFTs</h4>
          </Col>
        </Row>
        <Row>
          {creates.map((item) => (
            <Col lg="3" md="6" sm="12" key={item.id} className="mt-4">
              <div className="create__item">
                <span className="create__item-icon">{item.icon}</span>
                <h5 className="create__item-title">{item.title}</h5>
                <span className="create__item-des">{item.des}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CreateNFT;
