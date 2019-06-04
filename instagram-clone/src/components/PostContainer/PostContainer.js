import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostContainer.scss';

export default class PostContainer extends React.Component {

  render (){
    this.filteredPosts = this.props.data.filter (el => {
      console.log("Filtering:");
      console.log(el);
      const includes = el.username.includes(this.props.searchQuery);
      console.log('does this element satisfy search?: ' + includes);
      return includes;
    });
    this.matchesQuery = this.props.data.map(el => el.username.includes(this.props.searchQuery));
  
    this.posts = this.filteredPosts.map (post => {
      return <Post data={post} key={post.id}/>;
    })

    console.log(this.props.data);
    console.log(this.matchesQuery);

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