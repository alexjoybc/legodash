import React from "react";
import ListGroup from "react-bootstrap/ListGroup"
import BrickItem from "../BrickItem"


export default function BrickList({ bricks }) {
  if (bricks.length === 0) {
    return <div>empty</div>;
  }

  return (
    <ListGroup>
      {bricks.map(brick => (
        <ListGroup.Item><BrickItem brick={brick} ></BrickItem></ListGroup.Item>
      ))}
    </ListGroup>
  );
}
