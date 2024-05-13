import React, { useMemo, useState } from "react";
import { Button, ButtonProps, Card, Col, Form, Row } from "react-bootstrap";

interface IProps {
  img: string;
  title: string;
  text: string;
  minValue: number;
  maxValue: number;
  setImage: (value: number) => void;
}

const HomeCard: React.FC<IProps> = ({
  img,
  title,
  text,
  minValue,
  maxValue,
  setImage,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [validated, setValidated] = useState(false);

  const cardText = useMemo(() => {
    const returnElems = [];
    const sliceLength = 150;
    let spanText = "";

    if (text.length < sliceLength) {
      return text;
    }

    if (text.length > sliceLength && expanded === false) {
      returnElems.push(text.slice(0, sliceLength).concat("... "));
      spanText = "Read More";
    } else {
      returnElems.push(text.concat(" "));
      spanText = "Read Less";
    }
    returnElems.push(
      <span
        onClick={() => setExpanded((prevState) => !prevState)}
        className="read-text"
      >
        {spanText}
      </span>
    );
    return returnElems;
  }, [text, expanded]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    const formData = new FormData(event.currentTarget);
    const fCount = formData.get("fixture_count");

    // Get the images and extract image
    setImage(parseInt(String(fCount)));
  };

  return (
    <Card className="text-center rounded-4 border-primary">
      <div className="overflow rounded-4">
        <Card.Img variant="top" src={img} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{cardText}</Card.Text>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group as={Row} className="px-3 mb-3">
            <Col md={8}>
              <Form.Control
                placeholder="Enter No. of Teams"
                type="number"
                name="fixture_count"
                min={minValue}
                max={maxValue}
                required
              />
            </Col>
            <Col className="d-grid" md={4}>
              <Button type="submit">Generate</Button>
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default HomeCard;
