import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  latestItemContainer: {
    [theme.breakpoints.up('xl')]: {
      paddingTop: '30px',
    },
    paddingTop: '15px',
  },
  latestItem: {
    [theme.breakpoints.up('xl')]: {
      margin: '20px 15px',
    },
    margin: '5px 15px',
  },
  productContainer: {
    [theme.breakpoints.up('xl')]: {
      margin: '25px 20px',
    },
    margin: '5px 15px',
  },
  header: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '5rem',
    },
  },
  image: {
    [theme.breakpoints.only('sm')]: {
      height: 250,
      width: '100%',
    },
    [theme.breakpoints.only('md')]: {
      height: 275,
      width: '100%',
    },
    [theme.breakpoints.up('xl')]: {
      minHeight: 500,
      width: '100%',
    },
    height: 350,
    objectFit: 'scale-down',
    objectPosition: 'center',
  },
  productName: {
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1.2rem',
    },

    [theme.breakpoints.up('xl')]: {
      fontSize: '2.5rem',
    },
  },
  brand: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.7rem',
    },
  },
  price: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1rem',
    },
  },
  actionIcons: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.6rem',
    },
  },
  qty: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2rem',
    },
  },
  rating: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.0rem',
    },
  },
}))
