import React from "react";
import moment from 'moment';
import "./Post.scss";
import CommentSection from "../CommentSection/CommentSection";

export default class Post extends React.Component {

  state = {
    commentInput: ''
  }

  updateCommentInput = event => {

    event.preventDefault();
    this.setState({ commentInput: event.target.value});
  
  };

  postComment = event => {
    event.preventDefault();

    if(this.state.commentInput.trim().lenth < 1){
      return;
    }

    this.props.data.comments.push(
      {
        id: (this.props.data.comments.length + 1).toString(),
        text: this.state.commentInput,
        username: 'mohammadtourj'
      }
    )

    this.setState( {commentInput: ''} );
  }

  render () {
  return (
    <article className="post">
      <header className="header">
        <img className='thumbnail' src={this.props.data.thumbnailUrl} alt={this.props.data.username}/>
        <p>{this.props.data.username}</p>
      </header>
      <div className="image">
        <div className="layer1">
          <div className="layer2">
            <div className="layer3">
              <img src={this.props.data.imageUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-section'>
        <section className='actions'>
          <span className='like'>
            <button className='btn'>
              <span className='icon' />
            </button>
          </span>
          <span className='a-comment'>
            <button className='btn'>
              <span className='icon' />
            </button>
          </span>
          <span className='share'>
            <button className='btn'>
              <span className='icon' />
            </button>
          </span>
          <span className='save'>
            <button className='btn'>
              <span className='icon' />
            </button>
          </span>
        </section>
        <section className='likes'>
          <div className='layer1'>
            <div className='layer2'>
              <span>{this.props.data.likes.toString()} likes</span>
            </div>
          </div>
        </section>
        <CommentSection comments={this.props.data.comments} />
        <section className='timestamp'>
          {moment(this.props.data.timestamp, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}
        </section>
        <section className='comment-field'>
          <form onSubmit={this.postComment} className='layer1'>
            <input placeholder='Add a comment...' onChange={this.updateCommentInput} value={this.state.commentInput}  />
            <button onClick={this.postComment} className={this.state.commentInput.trim().length > 0 ? 'active' : ''} type='submit'>Post</button>
          </form>
        </section>
      </div>
    </article>
  );
}
}
