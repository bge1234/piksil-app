var React = require('react');
var ReactDOM = require('react-dom');
var dotenv = require('dotenv');

$(window).load(function() {
  var getter = $.ajax({
    url: "https://pikselapi-benebel.herokuapp.com/api",
    method: "GET",
    dataType: "json"
  });

  getter.done(function(response) {
    
  });

  getter.fail(function(response) {
    console.log("Error getting JSON:!");
  });
});
