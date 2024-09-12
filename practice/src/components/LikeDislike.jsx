import React, { useState } from 'react';

function LikeDislike() {

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  function likeCountUp() {
    setLike(like + 1)
  }

  function dislikeCountUp() {
    setDislike(dislike + 1)
  }

  return (
    <div>
      <button onClick={likeCountUp} >좋아요: {like}</button><br />
      <button onClick={dislikeCountUp} >싫어요: {dislike}</button>
    </div>
  );
}

export default LikeDislike;