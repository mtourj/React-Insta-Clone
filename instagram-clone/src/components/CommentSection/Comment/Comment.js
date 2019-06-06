import React from 'react';
import './Comment.scss';

const Comment = props => {
  return (
    <div className='comment'>
      <p className='username'>{props.comment.username}</p>
      <p>{props.comment.text}</p>
    </div>
  );
}

export default Comment;