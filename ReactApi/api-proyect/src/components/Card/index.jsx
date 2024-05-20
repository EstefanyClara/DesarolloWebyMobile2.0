/*import Card from 'react-bootstrap/Card';

function BodyOnlyExample() {
  return (
    <Card>
      <Card.Body>{text}</Card.Body>
    </Card>
  );
}

export default BodyOnlyExample;*/
import React from "react";

const Card = ({ children }) => {
  return <div className="jokeContainer">{children}</div>;
};

export default Card;