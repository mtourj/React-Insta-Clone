import React from "react";
import "./Post.scss";
import CommentSection from "../CommentSection/CommentSection";

const Post = props => {

  return (
    <article className="post">
      <header className="header">
        <img className='thumbnail' src={props.data.thumbnailUrl} alt={props.data.username}/>
        <p>{props.data.username}</p>
      </header>
      <div className="image">
        <div className="layer1">
          <div className="layer2">
            <div className="layer3">
              <img src={props.data.imageUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
      <CommentSection comments={props.data.comments} />
    </article>
  );
};

export default Post;
