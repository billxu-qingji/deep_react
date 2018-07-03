import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import CommentStore from '../../stores/CommentStore';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: CommentStore.getComment(),
    }
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    CommentStore.addChangeListener(this._onChange);
  }
  componentWillMount() {
    CommentStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState({
      comment: CommentStore.getComment()
    })
  }
  render() {
    return (
      <dir>
        <CommentList comments={this.state.comments} />
        <CommentForm onSubmitComment={this.handleSubmitComment} />
      </dir>
    )
  }
}