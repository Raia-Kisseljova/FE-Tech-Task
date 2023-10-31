import styles from './styles'
import { getCaptionFromEdges } from './helpers'

const Image = (props) => {
  const { data } = props
  return (
    <img
      src={data.display_url}
      style={styles}
      alt={getCaptionFromEdges(data.edge_media_to_caption)}
      data-testid='post-image'
    />
  )
}

export default Image
