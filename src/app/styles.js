export default {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    margin: '16px auto',
    width: 'calc(100% - 40px)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start'
  },

  image: {
    flex: '1 0 60%',
    backgroundColor: '#FAFAFA',
    paddingTop: '2.5rem',
    paddingBottom: '2.5rem'

  },

  text: {
    flex: '1 0 40%',
    boxSizing: 'border-box',
    padding: '0 0 0 1rem',
    display: 'flex',
    flexDirection: 'column'
  }
}
