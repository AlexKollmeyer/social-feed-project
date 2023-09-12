import React, { useState } from "react";
import "./Post.css";

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);

  const [isDisLiked, setIsDisLiked] = useState(false);

  const handleLike = (e) => {
    setIsLiked(!isLiked);
    if (isDisLiked === true) {
      setIsDisLiked(!isDisLiked);
    }
  };

  const handleDislike = (e) => {
    setIsDisLiked(!isDisLiked);
    if (isLiked === true) {
      setIsLiked(!isLiked);
    }
  };
  const likeBtnClass = isLiked ? "like-btn" : "";
  const disLikeBtnClass = isDisLiked ? "dislike-btn" : "";
  return (
    post && (
      <div>
        <h4>{post.userName}</h4>
        <p>{post.postContent}</p>
        <button className={likeBtnClass} onClick={handleLike}>
          Like
        </button>
        <button className={disLikeBtnClass} onClick={handleDislike}>
          Dislike
        </button>
      </div>
    )
  );
};

export default Post;

/* const MovieItem = ({title, activeIndex, setActiveIndex, index}) => {
    const [isFavorite , setIsFavorite] = useState(false);
    
    const handleFavorite=(e) =>{
        setIsFavorite(!isFavorite)
    };

    const handleActive = () => {
        setActiveIndex(index)
    }

    const btnClass= isFavorite ? 'active-btn' : ''
    const activeClass = index === activeIndex ? 'active-movie' : ''

    return ( <div onClick={handleActive} className={`movie-item ${activeClass}`}>
        <span>{title}</span>
        <button className={btnClass} onClick={handleFavorite}>Favorite</button>
    </div> );
}
 
export default MovieItem; */

/* import './MovieInfo.css'

const MovieInfo = ({movieObj}) => {
    return movieObj && ( <div className="flex-item">
        <h4>{movieObj.title}</h4>
        <div >
            <div className='data-item'>
                <span>Running Time </span>
                <span>{movieObj.runningTime}</span>
            </div>
            <div className='data-item'>
                <span>Genre </span>
                <span>{movieObj.genre}</span>
            </div>
        </div>
    </div> );
}
 
export default MovieInfo; */
