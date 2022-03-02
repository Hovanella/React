import React, { Component } from "react";
import { LinksForJobs } from "./LinksForJobs";

export class JobSelect extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
  }

  selected = (selection) => {
    this.setState({ id: selection.target.value });
  };

  jobs = [
    {
      id: 1,
      name: "Programmer",
    },
    {
      id: 2,
      name: "Artist",
    },
    {
      id: 3,
      name: "Sportsman",
    },
    {
      id: 4,
      name: "Writer",
    },
    {
      id: 5,
      name: "Doctor",
    },
  ];



  render() {
    return (
      <div>
        <select className={"select"} onChange={this.selected}>
          <option selected={true} value={0}>
            ...
          </option>
          {this.jobs.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <LinksForJobs id={this.state.id} name={this.state.name} />
      </div>
    );
  }
}
