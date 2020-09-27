import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar, Badge, Card } from "react-bootstrap";

/**
 * After the user answer the question, show repective feedback to him, such as progress bar and score
 */
export class ScoreContent extends React.Component {
  render() {
    let correctScore = this.props.correctScore;
    let wrongScore = this.props.wrongScore;
    let totalQuestionNo = this.props.totalQuestionNo;

    let scoreBadge = (
      <h4>
        <Badge pill variant="success">
          Score: {correctScore}
        </Badge>
      </h4>
    );

    let scoreProgressBar = (
      <Card bg="primary">
        <ProgressBar>
          <ProgressBar
            variant="success"
            label={`✓`}
            now={correctScore} 
            key={1}
            max={totalQuestionNo}
          />
          <ProgressBar
            variant="danger"
            label={`✕`}
            now={wrongScore}
            key={2}
            max={totalQuestionNo}
          />
        </ProgressBar>
      </Card>
    );

    return (
      <div>
        {scoreBadge}
        {scoreProgressBar}
      </div>
    );
  }
}
