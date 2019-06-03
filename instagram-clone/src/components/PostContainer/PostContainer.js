import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostContainer.scss';

export default class PostContainer extends React.Component {
  posts = this.props.data.map (post => {
    return <Post data={post} key={post.id}/>;
  })

  render (){
    return (
      <div className='post-container'>
        {this.posts}
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