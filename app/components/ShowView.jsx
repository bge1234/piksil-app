import React from 'react';

export default class Show extends React.Component {
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
                <img className="feed-thumbnail" key={picture.id} src={picture.url}></img>)}
          </div>
        </div>
      </div>
    )
  }
}
