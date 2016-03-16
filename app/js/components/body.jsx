import React from "react";
import ReactDOM from "react-dom"

class Feed extends React.Component {
  render(){
    return (
      <h1>THIS IS A TEST</h1>
    )
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Feed/>, app)
