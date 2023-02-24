import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function Register() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed", {
      state: { name: nameRef.current.value, email: emailRef.current.value },
    });
  }

  return (
    <div className="container">
      <h1>Register for Red30 Tech</h1>
      <p>
        Make sure to grab your spot for this year's conference! We love
        technology and consistently work towards being the premier provider of
        technology solutions and events that connect the world.
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>
            Name:
            <Form.Control
              type="text"
              name="name"
              ref={nameRef}
              placeholder="Enter name"
            />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>
            Email:
            <Form.Control
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Enter email"
            />
          </Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit" value="Submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
