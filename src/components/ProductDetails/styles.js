import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  productDetailsContainer: {
    [theme.breakpoints.up('xl')]: {
      paddingTop: '25px',
    },
  },
  backButton: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.5rem',
    },
    margin: '15px 0px',
  },
  image: {
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.only('sm')]: {
      maxWidth: '300px',
    },
    [theme.breakpoints.only('md')]: {
      maxWidth: '400px',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '800px',
      maxHeight: '800px',
    },
    maxWidth: '500px',
    maxHeight: '500px',
  },
  container: {
    [theme.breakpoints.only('xs')]: {
      padding: '15px',
    },
    width: '100%',
  },
  brand: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.4rem',
    },
  },
  name: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.5rem',
    },
  },
  price: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.8rem',
    },
  },
  reviewText: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.8rem',
    },
  },
  reviewRatingStars: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.8rem',
    },
  },
  selectContainer: {
    paddingBottom: '10px',
  },
  selectLabel: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.8rem',
    },
  },
  select: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.8rem',
      width: '80px',
    },
    marginTop: '5px',
  },
  description: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1.3rem',
    },
    paddingRight: '5px',
  },
  addToCartButton: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.8rem',
    },
    marginBottom: '10px',
  },
  reviewContainer: {
    padding: '20px 20px',
    maxHeight: '300px',
    [theme.breakpoints.up('xl')]: {
      maxHeight: '400px',
    },
  },
  reviewHeader: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '4rem',
    },
  },
  reviewTextSub: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.2rem',
    },
  },
  reviewRatingText: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.5rem',
    },
  },
  reviewRating: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.5rem',
    },
  },
  reviewSubText: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.8rem',
    },
  },
  reviewButton: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.5rem',
    },
  },
  modalStyles: {
    [theme.breakpoints.up('xl')]: {
      width: 700,
      fontSize: '2.5rem',
    },
    [theme.breakpoints.only('xs')]: {
      width: 300,
    },
  },
  avatar: {
    [theme.breakpoints.up('xl')]: {
      height: '70px',
      width: '70px',
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 40,
    },
    marginRight: '10px',
    height: 56,
    width: 56,
  },
  avatarName: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  comment: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1rem',
    },
    fontSize: '1.4rem',
  },
  commentsContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: '10px 10px',
    },
    paddingTop: '10px',
  },
}))
