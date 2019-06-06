import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import styled from 'styled-components';

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

    const PostContainer = styled.div`
      display: flex;
      width: 100%;
      order: 4;
      background-color: #fafafa;
      flex-grow: 1;
      align-items: stretch;
      flex-shrink: 0;
      position: relative;
      padding-top: 60px;
      flex-flow: column nowrap;
      max-width: 935px;
      margin: 0 auto;
      box-sizing: border-box;
    `;

    return (
      <PostContainer>
        {this.posts}
      </PostContainer>
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