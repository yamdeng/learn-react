import React from "react";

function getCurrentTimeString() {
  // return new Date().toLocaleTimeString();
  return new Date().toLocaleString();
}

class StateBasic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "yamdeng", timeString: "" };
  }

  componentDidMount() {
    setInterval(() => {
      //   this.setState({ timeString: new Date().toLocaleString() }); // 바로 사용
      this.setState({ timeString: getCurrentTimeString() }); // 함수 사용
    }, 1000);
  }

  render() {
    const { name, timeString } = this.state;
    return (
      <div>
        <h1>StateBasic</h1>
        <div>name : {name}</div>
        <br />
        <div>현재시간 : {timeString}</div>
      </div>
    );
  }
}

export default StateBasic;
