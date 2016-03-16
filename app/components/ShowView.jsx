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
      <div>
        <ul>
          {this.state.pictures.map(picture =>
          <li key={picture.id}>{picture.url}</li>)}
        </ul>
      </div>
    )
  }
}
