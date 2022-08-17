import React from "react";
import CommonBanner from "../components/ui/common/CommonBanner";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Label,
  Input,
  FormText,
} from "reactstrap";
import AuctionCart from "../components/ui/AuctionCart/AuctionCart";
import img01 from "../assets/images/img-01.jpg";
import ava01 from "../assets/images/ava-01.png";

import "../styles/create.css";
const Create = () => {
  const item = {
    id: "01",
    title: "Travel Monkey Club",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img01,
    creator: "Trista Francis",
    creatorImg: ava01,
    currentBid: 5.89,
  };
  return (
    <>
      <CommonBanner title={"Create Item"} />
      <section className="create">
        <Container className="mt-5">
          <Row>
            <Col lg="3" md="5" sm="6">
              <div className="create__preview">
                <h5>Create preview</h5>
                <AuctionCart item={item} />
              </div>
            </Col>
            <Col lg="9" md="7" sm="6" className="form__upload">
              <Form>
                <FormGroup className="upload__item">
                  <Label for="exampleUrl">Upload file</Label>
                  <Input
                    id="exampleUrl"
                    name="url"
                    placeholder="Upload file"
                    type="file"
                  />
                </FormGroup>
                <FormGroup className="upload__item">
                  <Label for="exampleTitle">Title</Label>
                  <Input
                    id="exampleTitle"
                    name="text"
                    placeholder="Enter title for one item ETH"
                    type="number"
                  />
                </FormGroup>
                <FormGroup className="upload__item">
                  <Label for="exampleNumber">Price</Label>
                  <Input
                    id="exampleNumber"
                    name="number"
                    placeholder="Enter price for one item ETH"
                    type="number"
                  />
                </FormGroup>
                <FormGroup className="upload__item">
                  <Label for="exampleEmail">Minium Bid</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter Minium Bid"
                    type="text"
                  />
                </FormGroup>

                <FormGroup className="upload__item">
                  <Label for="exampleDate">Date</Label>
                  <Input
                    id="exampleDate"
                    name="date"
                    placeholder="date placeholder"
                    type="date"
                  />
                </FormGroup>

                <FormGroup className="upload__item">
                  <Label for="exampleText">Description</Label>
                  <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    className="textarea"
                    rows="10"
                  />
                </FormGroup>
                <div className="upload__btn text-center">
                  <button>Upload</button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
