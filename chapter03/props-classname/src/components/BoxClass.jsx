import React, { Component } from "react";

class BoxClass extends Component {
  render() {
    const { props } = this;
    const { bg, profile } = props;
    const { name, age, email } = profile;
    return (
      <div className={bg}>
        <h1>BoxClass</h1>
        <br />
        profile full info string : {JSON.stringify(profile)}
        <br />
        profile full info string case 2 : {`${name}-${email}`}
        <br />
        name : {name}
        <br />
        email : {email}
        <br />
        age : {age}
        <br />
      </div>
    );
  }
}

export default BoxClass;
