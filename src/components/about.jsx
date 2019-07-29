import React, { Component } from "react";

class About extends Component {
  state = {};
  handleClick=()=>{
    this.props.history.push('/test');
  }
  render() {
    return (
      <div>
        <p>ABOUT...........</p>
        <p>Bhamma pichi pilakayi </p>
        <button onClick={this.handleClick}>Navigate to test</button>
      </div>  
    );
  }
}

export default About;
