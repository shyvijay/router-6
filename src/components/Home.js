import Hero from "./Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home({ title }) {
  return (
    <>
      <Hero />
      <Container className="mt-4">
        <Row>
          <Col>
            <h1>{title}</h1>
            <p>
              This is a fictitious company and conference created by{" "}
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn Corporation, or its affiliates
              </a>
              , solely for the creation and development of educational training
              materials. Any resemblance to real products or services is purely
              coincidental. Information provided about the products or services
              is also fictitious and should not be construed as representative
              of actual products or services on the market in a similar product
              or service category.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
