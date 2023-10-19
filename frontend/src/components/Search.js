import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs="12" md="8">
          <Form>
            <Form.Row>
              <Col xs="9">
                <Form.Control placeholder="search for new image..." />
              </Col>
              <Col>
                <button varient="primary" type="submit">Search</button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
