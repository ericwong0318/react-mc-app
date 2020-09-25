import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class Question extends React.Component {
  render() {
    var questionNo = this.props.questionNo;
    var questionText = this.props.questionText;
    return (
      <div>
        <h4>Question {questionNo + 1}</h4>
        <p style={{ whiteSpace: "pre-wrap" }}>{questionText}</p>
      </div>
    );
  }
}
