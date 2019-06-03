import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from "../CommentSection/CommentSection";
import './PostContainer.scss';

export default class PostContainer extends React.Component {
  render (){
    return (
      <div className='post-container'>
        Posts go here
        <div className='post'>
          {/* blah blah blah */}
          <CommentSection comments={this.props.data[0].comments} />
        </div>
      </div>
    )
  }
}

PostContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string,
        username: PropTypes.string,
        thumbnaiLurl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf (
          PropTypes.shape ({
            id: PropTypes.string,
            username: PropTypes.string,
            text: PropTypes.string
          })
        )
      }
    )
  )
};