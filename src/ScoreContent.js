import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar, Badge, Card } from "react-bootstrap";

export class ScoreContent extends React.Component {
  render() {
    var score = this.props.score;
    var wrongScore = this.props.wrongScore;
    var totalQuestionNo = this.props.totalQuestionNo;

    var scoreBadge = (
      <h4>
        <Badge pill variant="success">
          Score: {score}
        </Badge>
      </h4>
    );

    var scoreProgressBar = (
      <Card bg="primary">
        <ProgressBar>
          <ProgressBar
            variant="success"
            label={`✓`}
            now={score} //score / totalQuestionNo
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
