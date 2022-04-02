import { Clock } from "./components/clock/clock.component.ts.js";
import { JobSelect } from "./components/Menu/JobSelect";
import * as ReactDOM from "react-dom";
import React from "react";
import "../src/components/Menu/Menu.css";
import "../src/components/clock/shared/clock-body.css";
ReactDOM.render(<Clock />, document.querySelector("#clock"));

