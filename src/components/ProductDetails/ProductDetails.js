import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import {
  Grid,
  CircularProgress,
  Typography,
  Paper,
  Container,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Snackbar,
  Divider,
} from '@material-ui/core'

import Rating from '@material-ui/lab/Rating'
import AlertMessage from '../AlertMessage/AlertMessage'
import { addToCart } from '../../redux/cart/actions/actions'
import Reviews from './Reviews/Reviews'
import { useStyles } from './styles'

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1)
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const dispatch = useDispatch()

  const history = useHistory()

  const classes = useStyles()

  const addToCartHandler = (e) => {
    e.preventDefault()
    try {
      setMessage('Added to Cart')
      dispatch(addToCart(product._id, quantity))
    } catch (error) {
      setMessage('Unable to Add')
    }
    setOpen(true)
  }

  const roundToNearestHalf = (number) => {
    return Math.round(number * 2) / 2
  }

  const determineMessageType = (msg) => {
    switch (msg) {
      case 'Added to Cart':
        setMessage('Successfully added to cart')
        return 'success'
      case 'Unable to Add':
        setMessage('Oops...something went wrong')
        return 'error'
    }
  }

  return (
    <>
      <Container maxWidth='xl' className={classes.productDetailsContainer}>
        <Button
          className={classes.backButton}
          variant='outlined'
          color='secondary'
          onClick={() => history.goBack()}
        >
          Go Back
        </Button>
      </Container>

      {
        <>
          {message && (
            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={() => setOpen(false)}
            >
              <AlertMessage
                severity={determineMessageType(message)}
                error={message}
              />
            </Snackbar>
          )}
        </>
      }
      {loading ? (
        <main style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant='h6'>
            Product details loading...one moment please
          </Typography>
          <CircularProgress size={125} />
        </main>
      ) : error ? (
        <AlertMessage severity={'error'} error={error} />
      ) : (
        <>
          <Container maxWidth='xl'>
            <Paper style={{ width: '100%' }}>
              <Grid container spacing={0} className={classes.container}>
                <Grid container item xs={12} sm={5}>
                  <Grid item xs={12} sm={12} md={5}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={classes.image}
                    />
                  </Grid>
                </Grid>

                <Grid container item xs={12} sm={7}>
                  <Grid container item md={12} direction='column'>
                    <Grid item>
                      <Typography variant='h6' className={classes.brand}>
                        {product.brand}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='h4' className={classes.name}>
                        {product.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='subtitle1' className={classes.price}>
                        ${product.price} <br /> (Tax Included)
                      </Typography>
                    </Grid>

                    <Grid container item alignContent='center'>
                      <Grid item>
                        <Typography
                          variant='body1'
                          className={classes.reviewText}
                        >
                          Review (
                          {product &&
                          product.reviews &&
                          product.reviews.length !== 0
                            ? product.reviews.length
                            : 0}
                          )
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant='body1'
                          gutterBottom
                          className={classes.reviewText}
                        >
                          <Rating
                            name='product-rating'
                            value={roundToNearestHalf(product.rating) || 0}
                            precision={0.5}
                            readOnly
                            className={classes.reviewRatingStars}
                          />
                          (
                          {product &&
                            product.rating &&
                            product.rating.toFixed(2)}
                          )
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item className={classes.selectContainer}>
                      <InputLabel id='quantity' className={classes.selectLabel}>
                        Quantity{' '}
                      </InputLabel>
                      <Select
                        variant='outlined'
                        name='Quantity'
                        label='quantity'
                        id='quantity'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className={classes.select}
                      >
                        {[...Array(product.quantity).keys()].map((x) => (
                          <MenuItem
                            key={x + 1}
                            value={x + 1}
                            className={classes.selectLabel}
                          >
                            {x + 1}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item>
                      <Button
                        size='large'
                        variant='contained'
                        color='primary'
                        onClick={(e) => addToCartHandler(e)}
                        className={classes.addToCartButton}
                      >
                        Add to Cart ${(product.price * quantity).toFixed(2)}
                      </Button>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant='h5'
                        gutterBottom
                        className={classes.description}
                      >
                        {product.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider variant='fullWidth' />
              <Grid container item xs={12} style={{ padding: '25px 0px' }}>
                <Reviews />
              </Grid>
            </Paper>
            <Paper></Paper>
          </Container>
        </>
      )}
    </>
  )
}

export default ProductDetails
