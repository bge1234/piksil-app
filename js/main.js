// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var dotenv = require('dotenv');


var MainFeed = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h2>This is my div</h2>
      </div>
    );
  }
});

var Account = React.createClass({
  render: function() {
    if(localStorage.getItem('user')) {
      return (
      <a href="users/me">Your Account</a>
    )
  } else {
    return (
      <a href="login">Login</a>
    )
  }
  }
})

ReactDOM.render(
  <MainFeed />,
  document.getElementById('example')
);

ReactDOM.render(
  <Account />,
  document.getElementById('account')
)
