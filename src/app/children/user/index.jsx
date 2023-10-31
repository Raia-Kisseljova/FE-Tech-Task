import React from 'react'
import styles from './styles'

export const UserSection = (props) => {
  const { owner } = props
  return (
    <div style={styles.user}>
      <img src='user_icon.png' alt='user icon' style={styles.userImage} />
      <div style={styles.userText}>
        <p style={styles.userName}>{owner}</p>
        <p style={styles.userLocation}>Villa Park, England</p>
      </div>
    </div>
  )
}
