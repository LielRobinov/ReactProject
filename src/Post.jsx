import React, { Component } from "react";
import LikeDisplay from "./LikeDisplay.jsx";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: 0,
      isLiked: false
    };
  }
   toggleLike = () => {
    this.setState(prevState => ({
        isLiked: !prevState.isLiked, 
        likeCount: prevState.isLiked
          ? prevState.likeCount - 1   
          : prevState.likeCount + 1   
    }));
  };

    render (){
      return(
        <div>
          <h3>Example Post</h3>
           <LikeDisplay
           likeCount={this.state.likeCount}
           isLiked={this.state.isLiked} />
           
           <button onClick={this.toggleLike}>
          {this.state.isLiked ? "Unlike" : "Like"}
        </button>
        </div>
      );
    }
  }
  export default Post;
