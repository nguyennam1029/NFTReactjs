import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const MyAccount = [
  {
    display: "Author Profile",
    url: "/Seller-profile",
  },
  {
    display: "Create Item",
    url: "/Create",
  },
  {
    display: "Collection",
    url: "/Market",
  },
  {
    display: "Edit Profile",
    url: "/Edit-profile",
  },
];

const Resources = [
  {
    display: "Help Center",
    url: "#",
  },
  {
    display: "Partner",
    url: "#",
  },
  {
    display: "Community",
    url: "#",
  },
  {
    display: "Activity",
    url: "#",
  },
];

const Company = [
  {
    display: "About",
    url: "#",
  },
  {
    display: "Career",
    url: "#",
  },
  {
    display: "Ranking",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "#",
  },
];

const Social = [
  {
    display: <i class="ri-facebook-circle-line"></i>,
    url: "#",
  },
  {
    display: <i class="ri-reactjs-line"></i>,
    url: "#",
  },
  {
    display: <i class="ri-instagram-line"></i>,
    url: "#",
  },
  {
    display: <i class="ri-twitter-line"></i>,
    url: "#",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="12" className="footer__info">
            <div className="logo">
              <h2 className="d-flex align-items-center">
                <i class="ri-fire-fill"></i>
                NTFS
              </h2>
            </div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              quidem corrupti modi labore assumenda at blanditiis molestiae,
              quos distinctio nesciunt.
            </span>
          </Col>

          <Col lg="2" md="3" sm="12">
            <h5 className="footer__heading">My Account</h5>
            <ListGroup className="footer__list-group">
              {MyAccount.map((item, index) => (
                <ListGroupItem key={index} className="footer__list-item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="3" sm="12">
            <h5 className="footer__heading">Resources</h5>
            <ListGroup className="footer__list-group">
              {Resources.map((item, index) => (
                <ListGroupItem key={index} className="footer__list-item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="6" sm="12">
            <h5 className="footer__heading">Company</h5>
            <ListGroup className="footer__list-group">
              {Company.map((item, index) => (
                <ListGroupItem key={index} className="footer__list-item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" sm="12">
            <h5 className="footer__heading">Newsletter</h5>
            <input
              className="input__newletter"
              type="text"
              placeholder="Email"
            />
            <div className="social-list d-flex align-items-center">
              {Social.map((item, index) => (
                <span className="social__item" key={index}>
                  <Link to={item.url}>{item.display}</Link>
                </span>
              ))}
            </div>
          </Col>
          <Col
            lg="12"
            className="d-flex align-items-center justify-content-center copyright"
          >
            <i class="ri-copyright-line"></i>
            Copyrights 09/08/2022, Developed by Nguyễn Văn Nam
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
