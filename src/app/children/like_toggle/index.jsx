import React, { useState } from 'react'
import LikeButton from '../like_button'
import UnLikeButton from '../unlike_button'

const LikeToggle = (props) => {
  const [liked, setLiked] = useState(false)
  return liked
    ? <LikeButton
        width={props.iconSize}
        onClick={() => setLiked((liked) => !liked)}
      />
    : (
      <UnLikeButton
        width={props.iconSize}
        onClick={() => setLiked((liked) => !liked)}
      />
      )
}

export default LikeToggle
