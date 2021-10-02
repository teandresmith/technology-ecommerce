import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  tabLabel: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '0.9rem',
    },
  },
  tabIcon: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.6rem',
    },
    paddingRight: '10px',
    fontSize: '2rem',
  },
  cardSubHeader: {
    [theme.breakpoints.only('lg')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.2rem',
    },
  },
  cardSubHeaderText: {
    [theme.breakpoints.only('lg')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.9rem',
    },
  },
  cardOrderImage: {
    [theme.breakpoints.down('md')]: {
      height: 100,
    },
    [theme.breakpoints.only('xs')]: {
      height: 200,
    },
    [theme.breakpoints.up('xl')]: {
      height: 300,
    },
    height: 150,
  },
  imageContainer: {
    [theme.breakpoints.only('xs')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  button: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.5rem',
      margin: '6px 3px',
    },
    [theme.breakpoints.only('xs')]: {
      margin: '3px 0px',
    },
    margin: '3px 3px',
  },
  card: {
    margin: '10px 0px',
  },
  product: {
    padding: '15px 0px',
  },
  pageHeader: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '3rem',
    },
  },
}))
