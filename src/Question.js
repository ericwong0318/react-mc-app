import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Show question text section of the MC question
 */
export class Question extends React.Component {
  render() {
    let questionNo = this.props.questionNo;
    let questionText = this.props.questionText;
    return (
      <div>
        <h4>Question {questionNo + 1}</h4>
        <p style={{ whiteSpace: "pre-wrap" }}>{questionText}</p>
      </div>
    );
  }
}
