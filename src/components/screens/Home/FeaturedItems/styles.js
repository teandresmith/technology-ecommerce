import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  carousel: {
    [theme.breakpoints.up('xl')]: {
      paddingTop: '35px',
    },
  },
  featuredItemContainer: {
    padding: '25px',
  },
  paper: {
    width: '100%',
  },
  image: {
    [theme.breakpoints.up('xl')]: {
      height: '700px',
    },
    [theme.breakpoints.down('lg')]: {
      maxHeight: '400px',
    },
  },
  itemName: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.5rem',
    },
  },
  button: {
    [theme.breakpoints.up('xl')]: { fontSize: '1.8rem' },
    [theme.breakpoints.up('xs')]: { marginBottom: '15px' },
    width: 'fit-content',
  },
}))
