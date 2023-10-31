import LikeToggle from '../../../like_toggle'
import styles from '../../styles'

const Comment = ({ el }) => (
  <li style={styles.commentLi} data-testid='single-comment'>
    <span style={{ ...styles.userName }}>
      {el.node.owner.username}
    </span>
    {el.node.text.split(' ').map((el, i) =>
      el.startsWith('#') || el.startsWith('@')
        ? (
          <span style={styles.commentSymbol} key={i}>
            {el + ' '}
          </span>
          )
        : (
          <span key={i}>{el + ' '}</span>
          )
    )}
    <span style={styles.unLikeButton}>
      <LikeToggle iconSize='12px' />
    </span>
  </li>
)

export default Comment
