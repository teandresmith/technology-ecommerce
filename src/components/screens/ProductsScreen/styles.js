import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
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
  card: {
    margin: '0px 15px',
    [theme.breakpoints.only('sm')]: {
      maxWidth: 250,
    },
    [theme.breakpoints.only('md')]: {
      maxWidth: 275,
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: 525,
    },
  },
  filterItems: {
    cursor: 'pointer',
    [theme.breakpoints.up('xl')]: {
      fontSize: '35px',
    },
  },
  sidebar: {
    overflowY: 'scroll',
    maxHeight: '80vh',
    border: '0.5px solid lightgrey',
  },
  productsHeader: {
    padding: '10px',
    border: '.5px solid lightgrey',
  },
  productsContainer: {
    padding: '10px',
    height: '100%',
    border: '.5px solid lightgrey',
  },
  productName: {
    [theme.breakpoints.only('sm')]: {
      fontSize: '20px',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '20px',
    },

    [theme.breakpoints.up('xl')]: {
      fontSize: '2.5rem',
    },
  },
  headerText: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '26px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.5rem',
    },
  },
  filterHeader: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '3rem',
    },
  },
  filterItemText: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.7rem',
    },
  },
  sortByHeader: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.5rem',
    },
  },
  rating: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.0rem',
    },
  },
  brand: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.5rem',
    },
  },
  price: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.7rem',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1rem',
    },
  },
  actionIcons: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.8rem',
    },
  },
  qty: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2rem',
    },
  },
}))
