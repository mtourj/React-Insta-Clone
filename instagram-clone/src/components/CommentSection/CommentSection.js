import React from 'react';
import Comment from './Comment/Comment';

const CommentSection = props => {
  let comments = props.comments.map (comment => <Comment key={comment.id} comment={comment}/>);

  return (
    <div className='comment-section'>
      {comments}
    </div>
  );
};

export default CommentSection;

//PropTypes already being verified by the parent, no real reason to do it again here.