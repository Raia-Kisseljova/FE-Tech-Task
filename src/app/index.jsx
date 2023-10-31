import Image from './children/image'
import styles from './styles'
import { CommentsSection } from './children/comments'
import { PostFooter } from './children/post_footer'
import { UserSection } from './children/user'

const App = (props) => {
  const { data } = props
  const owner = data.owner.username
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <UserSection owner={owner} />
        <CommentsSection data={data} owner={owner} />
        <PostFooter owner={owner} />
      </div>
    </main>
  )
}

export default App
