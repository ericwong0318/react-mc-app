import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
export class Answer extends React.Component {
  render() {
    //render form
    var btnLabel = this.props.btnLabel;
    var listItems = this.props.answerChoice.map((val, index) => (
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
