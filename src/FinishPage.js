import React from "react";
import { Card } from "react-bootstrap";
import { PieCh } from "./PieCh";

export class FinishPage extends React.Component {
  render() {
    var score = this.props.score;
    var wrongScore = this.props.wrongScore;

    return (
      <div>
        <h3>Result</h3>
        <h5>You may close this page now</h5>
        <PieCh score={score} wrongScore={wrongScore} />
        <br />
        <Card border="success">
          <Card.Body>
            <Card.Title>Correct: {score}</Card.Title>
            <Card.Text>You answer {score} questions correctly.</Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card border="danger">
          <Card.Body>
            <Card.Title>Incorrect: {wrongScore}</Card.Title>
            <Card.Text>
              You answer {wrongScore} questions Incorrectly.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
