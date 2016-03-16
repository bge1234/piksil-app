import React from "react";
import ReactDOM from "react-dom";

export default class Header extends React.Component {
  render(){
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-menu" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            <a href="/" className="navbar-brand">0_o Piksil</a>
          </div>
          <div className="collapse navbar-collapse" id="nav-menu">
            <ul className="nav navbar-nav">
              <li><a href="/feed">Feed</a></li>
              <li><a href="/user/favorites">Favorites</a></li>
              <li><a href="/user">Account</a></li>
            </ul>
          </div>
        </div>
    </nav>
      </div>
    );
  }
}
