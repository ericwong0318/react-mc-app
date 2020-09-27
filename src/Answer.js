import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

/**
 * Render the answer section of the MC question
 */
export class Answer extends React.Component {
  render() {
    let btnLabel = this.props.btnLabel;
    let listItems = this.props.answerChoice.map((val, index) => (
      <Form.Check
        name="groupOptions"
        type="radio"
        key={index}
        label={val}
        value={val}
        id={index}
      />
    ));

    return (
      <div>
        <Form id="radioForm">{listItems}</Form>
        <br />
        <Button onClick={this.props.handleClick}>{btnLabel}</Button>
      </div>
    );
  }
}
