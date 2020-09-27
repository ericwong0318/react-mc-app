import React from "react";
import { Card } from "react-bootstrap";
import { PieCh } from "./PieCh";

/**
 * Show the result of the quiz, by pie chart and numbers
 */
export class FinishPage extends React.Component {
  render() {
    var correctScore = this.props.correctScore;
    var wrongScore = this.props.wrongScore;

    return (
      <div>
        <h3>Result</h3>
        <h5>You may close this page now</h5>

        {/* Pie chart */}
        <PieCh correctScore={correctScore} wrongScore={wrongScore} />
        <br />

        {/* Number of correct questions */}
        <Card border="success">
          <Card.Body>
            <Card.Title>Correct: {correctScore}</Card.Title>
            <Card.Text>You answer {correctScore} questions correctly.</Card.Text>
          </Card.Body>
        </Card>
        <br />

        {/* Number of wrong questions */}
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
