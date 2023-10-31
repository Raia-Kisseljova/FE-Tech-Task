import React from 'react'
import LikeToggle from '../like_toggle'
import styles from './styles'
import data from '../../../data.json'

export const PostFooter = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: '25px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <span style={styles.amountOfLikes}>{data.edge_media_preview_like.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} likes</span>
        <span style={styles.daysSince}>4 DAYS AGO</span>
      </div>

      <LikeToggle iconSize='28px' />
    </div>
  )
}
