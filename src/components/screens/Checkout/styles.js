import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: '15px 10px',
  },
  buttonContainer: {
    marginTop: '10px',
  },
  button: {
    [theme.breakpoints.only('xs')]: {
      fontSize: '.7rem',
      marginTop: '7px',
    },
    marginRight: '5px',
  },
  cardElement: {
    display: 'flex',
  },
}))
