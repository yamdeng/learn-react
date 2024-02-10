import React from "react";

class BoxClass extends React.Component {
  render() {
    const { props } = this;
    const { bg } = props;
    return (
      <div className={bg}>
        <h1>BoxClass</h1>
      </div>
    );
  }
}

export default BoxClass;
