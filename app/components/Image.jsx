import React from 'react';
import {Router, Route, Link} from 'react-router';

export default class Image extends React.Component {
    componentDidMount() {
      this.setState({
        image: findImageById(this.props.params.imageId)
      })
    }

  render() {
  return (
    <div>
      <img src={this.state.image.url} />
    </div>
  )
}
}
