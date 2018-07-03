import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList';
import Promised from './Promised';

class CommentListContainer extends Component {
  render() {
    console.log('render commentlistcontainer');
    return (
      <CommentList data={this.props.commentList}/>
    )
  }
}
export default Promised('comments', CommentListContainer);