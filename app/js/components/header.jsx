import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  render(){
    return (
  <div>
        <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-menu" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        <a href="/" class="pull-left"><img src="../assets/bootstrap_brand.png" alt=""></img></a>
      </div>
      <div class="collapse navbar-collapse" id="nav-menu">
        <ul class="nav navbar-nav">
          <li><a href="/feed">Feed</a></li>
          <li><a href="/user/favorites">Favorites</a></li>
          <li><a href="/user">Account</a></li>
        </ul>
      </div>
    </div>
    </nav>
  </div>
    )
  }
}
const nav = document.getElementById('nav');

ReactDOM.render(<Header/>, nav)
