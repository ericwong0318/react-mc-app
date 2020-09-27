import React from "react";
import { Badge } from "react-bootstrap";

/**
 * Show feedback to the user. 
 * If he is correct, then the programme shows correct badge, otherwise show incorrect badge
 */
export class FeedbackBadge extends React.Component {
  render() {
    var feedback = this.props.feedback;
    var isCorrect = this.props.isCorrect;
    var answerChoiceCorrect = this.props.answerChoiceCorrect;
    var isSubmitted = this.props.isSubmitted;

    /** correct message */
    var correctMessage = <Badge variant="success">Correct</Badge>;

    /** wrong message, including correct answer and feedback from the questioner */
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
    /**
     * Determine the correctness
     * If the user doesn't submit any answer or answer incorrect, show wrongMessage.
     * Else show correctMessage
     */
    if (isSubmitted === false) return null;
    if (isCorrect === true) {
      return correctMessage;
    } else {
      return wrongMessage;
    }
  }
}
