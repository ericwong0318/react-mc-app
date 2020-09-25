import React from "react";
import { Badge } from "react-bootstrap";
export class FeedbackBadge extends React.Component {
  render() {
    var feedback = this.props.feedback;
    var isCorrect = this.props.isCorrect;
    var answerChoiceCorrect = this.props.answerChoiceCorrect;
    var isSubmitted = this.props.isSubmitted;

    var correctMessage = <Badge variant="success">Correct</Badge>;
    var wrongMessage = (
      <div>
        <div>
          <Badge variant="danger">Incorrect</Badge>
        </div>
        <div>
          <Badge variant="danger">Correct answer: {answerChoiceCorrect}</Badge>
        </div>
        <div>
          <Badge variant="danger">Please {feedback}</Badge>
        </div>
      </div>
    );
    if (isSubmitted === false) return null;
    if (isCorrect === true) {
      return correctMessage;
    } else {
      return wrongMessage;
    }
  }
}
