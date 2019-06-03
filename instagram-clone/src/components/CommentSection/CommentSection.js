import React from 'react';

const CommentSection = props => {
  return (
    <div className='comment-section'>
      Comment Section goes here.
      {/* Example of first comment, needs to be looped over */}
      <p>{props.comments[0].username}: {props.comments[0].text}</p>
    </div>
  );
};

export default CommentSection;

//PropTypes already being verified by the parent, no real reason to do it again here.