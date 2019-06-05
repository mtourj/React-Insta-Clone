import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostContainer.scss';

export default class PostContainer extends React.Component {
  render (){
    this.filteredPosts = this.props.data.filter (el => {
      const includes = el.username.includes(this.props.searchQuery);
      return includes;
    });
    this.matchesQuery = this.props.data.map(el => el.username.includes(this.props.searchQuery));
  
    this.posts = this.filteredPosts.map (post => {
      return <Post username={this.props.username} data={post} key={post.id}/>;
    })

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