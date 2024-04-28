import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { fetchLogin } from "../../app/features/authSlice";
import { ILoginBody } from "../../types/auth";
import { routes } from "../../lib/constants";

const Login = () => {
  const dispatch = useAppDispatch();
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    // Call the API to login
    const formData = new FormData(event.currentTarget);
    const loginDetails: ILoginBody = {
      email: formData.get("email")?.toString() ?? "",
      password: formData.get("password")?.toString() ?? "",
    };

    dispatch(fetchLogin(loginDetails)).then(() => {
      navigate(routes.home);
    });
  };

  return (
    <Container>
      <Row className="login-wrapper justify-content-center">
        <Col md={4} className="d-flex flex-column justify-content-center">
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">Login</Card.Title>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
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

export default Login;
