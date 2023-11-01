import React from 'react'
import LikeToggle from '../like_toggle'
import styles from './styles'
import data from '../../../data.json'

export const PostFooter = () => {
  return (
    <div
      style={styles.footerDiv}
    >
      <div
        style={styles.footerText}
      >
        <span style={styles.amountOfLikes}>{data.edge_media_preview_like.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} likes</span>
        <span style={styles.daysSince}>4 DAYS AGO</span>
      </div>

      <LikeToggle iconSize='28px' />
    </div>
  )
}
