import React from 'react'
import styles from './styles'
import Comment from './children/comment'

export const CommentsSection = (props) => {
  const { data, owner } = props

  return (
    <div style={styles.comments} data-testid='comments-section'>
      <ul style={styles.commentList}>
        <li style={styles.singleComment}>
          <span style={styles.userName}>{owner}</span>
          {data.edge_media_to_caption.edges[0].node.text
            .split('\n')
            .map((el, i) => {
              return i === 0
                ? <span key={i}>{el}</span>
                : (
                  <div key={i} style={styles.commentDiv}>
                    {el.split(' ').map((el, i) =>
                      el.startsWith('#')
                        ? (
                          <span key={i} style={styles.commentSymbol}>
                            {el + ' '}
                          </span>
                          )
                        : (
                          <span key={i}>{el}</span>
                          )
                    )}
                  </div>
                  )
            })}
        </li>
        {data.edge_media_to_comment.edges.map((el, i) => {
          return (
            <Comment key={i} el={el} />
          )
        })}
      </ul>
    </div>
  )
}
