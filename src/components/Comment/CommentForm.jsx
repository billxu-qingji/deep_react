import React , {Component, PropTypes} from 'react';
import CommentActions from '../../actions/CommentActions';

export default class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
    }
  }
  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }
  handleAddComment(){
    CommentActions.addComment(this.state.value)
  }
  render(){
    return (
      <div>
        <textarea 
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          className="comment-confirm-btn"
          onClick={this.handleAddComment}
        >
          评论
        </button>
      </div>
    )
  }
}
export default CommentForm;