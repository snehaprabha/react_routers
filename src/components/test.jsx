import React, { Component } from "react";

class Test extends Component {
  state = {};
  handleClick=()=>{
    this.props.history.push('/about');
  }
  render() {
    return (
      <div>
        <p>TESTing</p>
        <p>Try to create a text box with plane text area</p>
        <button onClick={this.handleClick}>Navigate to about</button>
      </div>
    );
  }
}

export default Test;
