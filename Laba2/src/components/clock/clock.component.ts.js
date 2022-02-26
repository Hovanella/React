import React from "react";
import { ClockBody } from "./shared/clock-body";

export class Clock extends React.Component {
  render() {
    return (
      <div class="clock">
        <ClockBody format={this.props.format} timezone={this.props.timezone} />
      </div>
    );
  }
}
