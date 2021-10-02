import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  image: {
    height: '400px',
    objectFit: 'fit',
    objectPosition: 'center',
  },
  name: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

export default useStyles
