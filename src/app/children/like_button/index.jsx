import LikedIcon from './children/liked_icon'

const LikeButton = (props) => {
  return <LikedIcon width={props.width} onClick={props.onClick} />
}

export default LikeButton
