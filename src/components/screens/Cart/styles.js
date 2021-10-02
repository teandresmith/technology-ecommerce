import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('xl')]: {
      paddingTop: '25px',
    },
  },
  text: {
    fontSize: '1.5rem',
  },
  emptyImage: {
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '100%',
    },
    width: '65%',
    textAlign: 'center',
  },
  button: {
    margin: '15px 0px',
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.2rem',
    },
  },
  card: {
    width: '100%',
    marginBottom: '20px',
  },
  cardImage: {
    [theme.breakpoints.up('xl')]: {
      height: '225px',
      width: '225px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '75px',
      width: '75px',
    },
    [theme.breakpoints.only('md')]: {
      height: '100px',
      width: '100px',
    },
    height: '150px',
    width: '150px',
  },
  cartItemsContainer: {
    [theme.breakpoints.up('md')]: {
      paddingRight: '50px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '20px',
    },
  },
  orderSummary: {
    border: '0.5px solid lightgray',
    backgroundColor: 'hsl(280, 0%, 95%)',
    borderRadius: '5px',
    height: 'fit-content',
    width: '100%',
    padding: '10px',
  },
  orderSummaryButtonContainer: {
    paddingTop: '15px',
  },
  orderSummaryButton: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.5rem',
    },
    width: '100%',
  },
  orderSummaryHeader: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.3rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1.8rem',
    },
  },
  orderSummaryTextContent: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.9rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1.1rem',
    },
  },
  itemName: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.9rem',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1.1rem',
    },
  },
  quantity: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.9rem',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1.1rem',
    },
  },
  icons: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1.1rem',
    },
  },
}))
