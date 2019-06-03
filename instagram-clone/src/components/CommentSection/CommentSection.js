import React from 'react';

const CommentSection = props => {
  let comments = props.comments.map (comment => <p key={comment.id}>{comment.username}: {comment.text}</p>);

  return (
    <div className='comment-section'>
      {comments}
    </div>
  );
};

export default CommentSection;

//PropTypes already being verified by the parent, no real reason to do it again here.