// const Signup = () => {
//   return <div>Signup</div>;
// };

// export default Signup;

import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { fetchLogin, fetchSignup } from "../../app/features/authSlice";
import { ISignupBody } from "../../types/auth";
import { routes } from "../../lib/constants";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form);

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(false);
      return;
    }

    setValidated(true);

    // Call the API to login
    const formData = new FormData(event.currentTarget);
    const signupDetails: ISignupBody = {
      firstName: formData.get("firstName")?.toString() ?? "",
      lastName: formData.get("lastName")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      password: formData.get("password")?.toString() ?? "",
    };

    dispatch(fetchSignup(signupDetails)).then(() => {
      navigate(routes.home);
    });
  };

  return (
    <Container>
      <Row className="login-wrapper justify-content-center">
        <Col md={4} className="d-flex flex-column justify-content-center">
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">SignUp</Card.Title>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="firstName"
                    placeholder="Enter First Name"
                    name="firstName"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="lastName"
                    placeholder="Enter Last Name"
                    name="lastName"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="login-button"
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
