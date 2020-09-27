import React from "react";
import { Button } from "react-bootstrap";
import { Instruction } from "./Instruction";

/**
 * Show welcome message and instructions
 */
export class FirstPage extends React.Component {
  render() {
    return (
      <div>
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Welcome
        </h3>
        <Instruction />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={this.props.handleClick}>Start</Button>
        </div>
      </div>
    );
  }
}
