import React from "react";
import { Button, Card } from "react-bootstrap";

const UserCard = ({
  username,
  email,
  first_name,
  last_name,
  role,
  onClick,
  onDelete,
}) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{first_name + "  " + last_name}</Card.Title>
        <Card.Text>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>Role: {role}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline-warning" onClick={onClick}>
          Edit
        </Button>
        {"       "}
        <Button variant="outline-danger" onClick={onDelete}>
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default UserCard;
