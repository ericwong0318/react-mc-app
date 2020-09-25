import React from "react";
import { Button } from "react-bootstrap";
import { Instruction } from "./Instruction";

export class FirstPage extends React.Component {
  render() {
    return (
      <div>
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Welcome {this.props.sName}
        </h3>
        <Instruction />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={this.props.handleClick}>Start</Button>
        </div>
      </div>
    );
  }
}
