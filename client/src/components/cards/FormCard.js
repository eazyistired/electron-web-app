import React from "react";
import { Card } from "react-bootstrap";

const FormCard = ({ header, body, footer }) => {
  return (
    <Card className="text-center" border="dark">
      <Card.Header as="h3">{header}</Card.Header>
      <Card.Body>{body}</Card.Body>
      <Card.Footer className="text-muted">{footer}</Card.Footer>
    </Card>
  );
};

export default FormCard;
