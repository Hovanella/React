import React from "react";

export class ClockBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  checkProperties = () => {
    const currentFormat = this.props.format;
    const currentTimezone = this.props.timezone;
    const timeZoneRegex = new RegExp("^[+,-]\\d{1,2}:\\d{2}$");

    if (
      currentFormat !== undefined &&
      currentFormat !== "12" &&
      currentFormat !== "24"
    )
      return false;

    if (currentTimezone === undefined) return true;
    if (timeZoneRegex.test(currentTimezone) === false) return false;

    const [hours, minutes] = currentTimezone.split(":");

    if (+minutes > 59) return false;
    if (+hours > 14 || +hours < -12) return false;

    //TODO доделать проверку
  };

  getTime = () => {
    let minutes;
    let hours;
    let seconds;
    let intervals = "";

    if (this.props.timezone !== undefined) {
      const currentTimezone = this.props.timezone;
      const [offsetHours, offsetMinutes] = this.props.timezone.split(":");

      minutes = this.state.date.getUTCMinutes();
      minutes += +offsetMinutes;

      let hoursDifference = 0;

      if (minutes > 59) {
        minutes -= 60;
        hoursDifference = 1;
      }
      if (minutes < 0) {
        minutes += 60;
        hoursDifference = -1;
      }
      hours = this.state.date.getUTCHours() + +offsetHours + hoursDifference;
    } else {
      minutes = this.state.date.getMinutes();
      hours = this.state.date.getHours();
    }

    if (this.props.format !== undefined) {
      if (this.props.format === "12") {
        if (hours >= 12) {
          if (hours !== 12) hours %= 12;
          intervals = "p.m.";
        } else {
          intervals = "a.m.";
        }
        if (hours === 0) hours = 12;
      }
    }

    seconds = this.state.date.getSeconds();

    return `${hours < 10 ? "0" + hours : hours} : ${
      minutes < 10 ? "0" + minutes : minutes
    } : ${seconds < 10 ? "0" + seconds : seconds} ${intervals}`;
  };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: new Date(Date.now()) });
  }

  render() {
    if (this.checkProperties() === false)
      return <div>Incorrect properties</div>;
    else {
      return <div>{this.getTime()}</div>;
    }
  }
}
