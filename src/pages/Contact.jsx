import React from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  Button,
  Label,
  FormText,
  Form,
} from "reactstrap";
import CommonBanner from "../components/ui/common/CommonBanner";
import "../styles/contact.css";
const Contact = () => {
  return (
    <>
      <CommonBanner title={"Contact now"} />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto mt-5">
              <div className="contact__header">
                <h4>Drop contact message</h4>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Commodi pariatur culpa nobis veniam quod quo odio, esse
                  mollitia? Qui, in!
                </span>
              </div>
              <div className="form_contact">
                <Form>
                  <FormGroup className="contact__item">
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup className="contact__item">
                    <Label for="exampleName">Name</Label>
                    <Input
                      id="exampleName"
                      name="text"
                      placeholder="Enter fullname"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup className="contact__item">
                    <Label for="exampleName">Subject</Label>
                    <Input
                      id="exampleName"
                      name="text"
                      placeholder="Enter subject"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup className="contact__item">
                    <Label for="exampleText">Text Area</Label>
                    <Input
                      id="exampleText"
                      name="text"
                      type="textarea"
                      className="textarea"
                      rows="7"
                    />
                  </FormGroup>
                  <div className="contact__btn text-center">
                    <Button className=" m-auto">Submit</Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
