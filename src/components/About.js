import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hero from "./Hero";

export default function About({ title }) {
  return (
    <>
      <Hero />
      <Container className="mt-4">
        <Row>
          <Col>
            {" "}
            <h1>{title}</h1>
            <p>
              Red30 Tech is the leading source of secure, fully customizable
              technology and business solutions. We cater to those who need
              scalable results that are sustainable for their company and the
              planet. With the ever-evolving technology landscape, we want to be
              your go-to source for business technology.
            </p>
            <p>
              Our mission is to provide technology and business-driven solutions
              that work seamlessly with your company, allowing your employees,
              partners, and customers to engage in quality interactions that
              lead to scalable growth. We consistently work towards being the
              premier provider of environmentally sustainable technology
              solutions that connect the world.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
