import React from 'react';
import {Link} from 'react-router';
import uuid from 'node-uuid'
export default class Feed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: []
    }
  }
  componentDidMount() {
    var self = this;

    $.getJSON('https://pikselapi-benebel.herokuapp.com/api', function(result){
      self.setState({pictures: result})
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row-fluid">
          <div className="show-thumbs">
              {this.state.pictures.map(picture =>
                <Link to="http://google.com">
                  <img className="feed-thumbnail" key={picture._id} src={picture.url}></img></Link>)}
          </div>
        </div>
      </div>
    )
  }
}
