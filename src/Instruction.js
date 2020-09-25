import React from "react";
import { Jumbotron, ListGroup } from "react-bootstrap";
export function Instruction() {
  return (
    <Jumbotron>
      <h3>Instructions</h3>
      <h5>
        Please read the following instructions carefully before you start:
      </h5>
      <ListGroup>
        <ListGroup.Item>
          Please do not click "go back" in your browser.
        </ListGroup.Item>
        <ListGroup.Item>
          Please do not close this page until you have completed the exercise.
        </ListGroup.Item>
        <ListGroup.Item>
          You cannot modify your answer after clicking "submit" button.
        </ListGroup.Item>
        <ListGroup.Item>
          The author may have helpful comments for each question. Be sure to
          check for this feedback.
        </ListGroup.Item>
      </ListGroup>
    </Jumbotron>
  );
}
