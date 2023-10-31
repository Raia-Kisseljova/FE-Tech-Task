import UnLikedIcon from './children/unliked_icon'

const UnLikeButton = (props) => {
  return <UnLikedIcon width={props.width} onClick={props.onClick} />
}

export default UnLikeButton
