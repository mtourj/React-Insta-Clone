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
      <div className='bottom-section'>
        <section className='actions'>
          <span className='like'>
            <button className='btn'>
              <span className='icon' />
            </button>
          </span>
          <span className='comment'>
            <button className='btn'>
              <span className='icon' />
            </button>
          </span>
          <span className='share'>
            <button className='btn'>
              <span className='icon' />
            </button>
          </span>
          <span className='save'>
            <button className='btn'>
              <span className='icon' />
            </button>
          </span>
        </section>
        <section className='likes'>
          <div className='layer1'>
            <div className='layer2'>
              <a href="#">{props.data.likes.toString()} likes</a>
            </div>
          </div>
        </section>
        <CommentSection comments={props.data.comments} />
      </div>
    </article>
  );
};

export default Post;
