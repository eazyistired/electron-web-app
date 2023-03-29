import React from "react";
import { Button, Card } from "react-bootstrap";

const TeamCard = ({ name, team_members, onClick, onDelete }) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>
          <p>Team members: {team_members}</p>
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline-warning" onClick={onClick}>
          Update
        </Button>
        <Button variant="outline-danger" onClick={onDelete}>
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default TeamCard;
