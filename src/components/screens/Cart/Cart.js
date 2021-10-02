import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../../redux/cart/actions/actions'
import { Link } from 'react-router-dom'
import {
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
  Divider,
  Card,
  CardContent,
} from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import Navbar from '../../Navbar/Navbar'
import AlertMessage from '../../AlertMessage/AlertMessage'
import { useStyles } from './styles'
import emptyCart from '../../../asset/Images/emptyCart.jpg'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

const Cart = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const cartTotalPrice = cartItems
    .reduce((acc, items) => acc + items.qty * items.price, 0)
    .toFixed(2)

  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />

      {cartItems.length === 0 ? (
        <Container maxWidth='lg' className={classes.container}>
          <AlertMessage
            customClass={classes}
            severity={'info'}
            error={'Your Cart Is Empty.'}
          />
          <Grid container item justifyContent='center'>
            <img
              src={emptyCart}
              className={classes.emptyImage}
              alt='Empty Cart'
            />
          </Grid>

          <Grid container item justifyContent='center'>
            <Button
              size='large'
              variant='outlined'
              color='primary'
              component={Link}
              to='/'
              className={classes.button}
            >
              Return to Home
            </Button>
          </Grid>
        </Container>
      ) : matches ? (
        <MobileView />
      ) : (
        <>
          <Container maxWidth='xl' className={classes.container}>
            <Button
              variant='outlined'
              color='secondary'
              component={Link}
              to='/'
              className={classes.button}
            >
              Go back
            </Button>
          </Container>

          <Container maxWidth='xl'>
            <Grid container>
              <Grid
                container
                item
                sm={9}
                className={classes.cartItemsContainer}
              >
                {cartItems.map((item) => (
                  <Grid
                    container
                    item
                    key={item.product}
                    alignItems='center'
                    xs={12}
                  >
                    <Card className={classes.card}>
                      <CardContent>
                        <Grid
                          container
                          item
                          direction='row'
                          justifyContent='space-between'
                          alignItems='center'
                        >
                          <Grid item>
                            <img
                              src={item.image}
                              alt={item.name}
                              className={classes.cardImage}
                            />
                          </Grid>
                          <Grid item>
                            <Typography
                              variant='h6'
                              className={classes.itemName}
                            >
                              {item.name}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant='body1'
                              className={classes.quantity}
                            >
                              Qty: {item.qty}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <IconButton
                              onClick={(e) => {
                                e.preventDefault()
                                item.qty = item.qty - 1
                                dispatch(addToCart(item.product, item.qty))
                              }}
                              disabled={item.qty === 1}
                            >
                              <RemoveIcon className={classes.icons} />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant='body1'
                              className={classes.quantity}
                            >
                              {item.qty}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <IconButton
                              onClick={(e) => {
                                e.preventDefault()
                                item.qty = item.qty + 1
                                dispatch(addToCart(item.product, item.qty))
                              }}
                              disabled={item.qty === item.quantity}
                            >
                              <AddIcon className={classes.icons} />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <IconButton
                              onClick={(e) => {
                                e.preventDefault()
                                dispatch(removeFromCart(item.product))
                              }}
                              disabled={item.qty === 0}
                            >
                              <DeleteIcon
                                color='error'
                                className={classes.icons}
                              />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Grid container item sm={3}>
                <Grid
                  container
                  item
                  direction='column'
                  className={classes.orderSummary}
                >
                  <Grid item>
                    <Typography
                      variant='h4'
                      gutterBottom
                      className={classes.orderSummaryHeader}
                    >
                      Order Summary
                    </Typography>
                  </Grid>
                  <Divider variant='fullWidth' />

                  <Grid item container justifyContent='space-between'>
                    <Typography
                      variant='h6'
                      gutterBottom
                      className={classes.orderSummaryTextContent}
                    >
                      {' '}
                      Cart Subtotal
                    </Typography>
                    <Typography
                      variant='h6'
                      className={classes.orderSummaryTextContent}
                    >
                      ${cartTotalPrice}
                    </Typography>
                  </Grid>
                  <Grid item container justifyContent='space-between'>
                    <Typography
                      variant='h6'
                      className={classes.orderSummaryTextContent}
                    >
                      Tax
                    </Typography>
                    <Typography
                      variant='h6'
                      gutterBottom
                      className={classes.orderSummaryTextContent}
                    >
                      $0.00
                    </Typography>
                  </Grid>
                  <Divider variant='fullWidth' />
                  <Grid item container justifyContent='space-between'>
                    <Typography
                      variant='h6'
                      className={classes.orderSummaryTextContent}
                    >
                      Items in Cart
                    </Typography>
                    <Typography
                      variant='h6'
                      gutterBottom
                      className={classes.orderSummaryTextContent}
                    >
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </Typography>
                  </Grid>
                  <Grid item container justifyContent='space-between'>
                    <Typography
                      variant='h6'
                      className={classes.orderSummaryTextContent}
                    >
                      Total Price
                    </Typography>
                    <Typography
                      variant='h6'
                      gutterBottom
                      className={classes.orderSummaryTextContent}
                    >
                      {' '}
                      ${cartTotalPrice}
                    </Typography>
                  </Grid>
                  <Divider variant='fullWidth' />
                  <Grid item className={classes.orderSummaryButtonContainer}>
                    <Button
                      variant='contained'
                      disabled={cartItems.length === 0}
                      component={Link}
                      to='/checkout'
                      color='primary'
                      className={classes.orderSummaryButton}
                    >
                      Proceed to Checkout
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  )
}

const MobileView = () => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const cartTotalPrice = cartItems
    .reduce((acc, items) => acc + items.qty * items.price, 0)
    .toFixed(2)

  const classes = useStyles()
  const dispatch = useDispatch()
  return (
    <>
      <Container maxWidth='md'>
        <Button
          variant='outlined'
          color='secondary'
          component={Link}
          to='/'
          className={classes.button}
        >
          Go back
        </Button>
      </Container>

      <Container maxWidth='md'>
        <Grid container>
          <Grid container item xs={12}>
            <Grid
              container
              item
              direction='column'
              className={classes.orderSummary}
            >
              <Grid item>
                <Typography
                  variant='h4'
                  gutterBottom
                  className={classes.orderSummaryHeader}
                >
                  Order Summary
                </Typography>
              </Grid>
              <Divider variant='fullWidth' />

              <Grid item container justifyContent='space-between'>
                <Typography
                  variant='h6'
                  gutterBottom
                  className={classes.orderSummaryTextContent}
                >
                  {' '}
                  Cart Subtotal
                </Typography>
                <Typography
                  variant='h6'
                  className={classes.orderSummaryTextContent}
                >
                  ${cartTotalPrice}
                </Typography>
              </Grid>
              <Grid item container justifyContent='space-between'>
                <Typography
                  variant='h6'
                  className={classes.orderSummaryTextContent}
                >
                  Tax
                </Typography>
                <Typography
                  variant='h6'
                  gutterBottom
                  className={classes.orderSummaryTextContent}
                >
                  $0.00
                </Typography>
              </Grid>
              <Divider variant='fullWidth' />
              <Grid item container justifyContent='space-between'>
                <Typography
                  variant='h6'
                  className={classes.orderSummaryTextContent}
                >
                  Items in Cart
                </Typography>
                <Typography
                  variant='h6'
                  gutterBottom
                  className={classes.orderSummaryTextContent}
                >
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                </Typography>
              </Grid>
              <Grid item container justifyContent='space-between'>
                <Typography
                  variant='h6'
                  className={classes.orderSummaryTextContent}
                >
                  Total Price
                </Typography>
                <Typography
                  variant='h6'
                  gutterBottom
                  className={classes.orderSummaryTextContent}
                >
                  {' '}
                  ${cartTotalPrice}
                </Typography>
              </Grid>
              <Divider variant='fullWidth' />
              <Grid item className={classes.orderSummaryButtonContainer}>
                <Button
                  variant='contained'
                  disabled={cartItems.length === 0}
                  component={Link}
                  to='/checkout'
                  color='primary'
                  className={classes.orderSummaryButton}
                >
                  Proceed to Checkout
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12} className={classes.cartItemsContainer}>
            {cartItems.map((item) => (
              <Grid
                container
                item
                key={item.product}
                alignItems='center'
                xs={12}
                style={{ minWidth: '100%' }}
              >
                <Card className={classes.card}>
                  <CardContent>
                    <Grid
                      container
                      item
                      direction='row'
                      justifyContent='space-between'
                      alignItems='center'
                      xs={12}
                    >
                      <Grid item xs={6} sm={2}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className={classes.cardImage}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Typography variant='h6' className={classes.itemName}>
                          {item.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant='body1'
                          className={classes.quantity}
                        >
                          Qty: {item.qty}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <IconButton
                          onClick={(e) => {
                            e.preventDefault()
                            item.qty = item.qty - 1
                            dispatch(addToCart(item.product, item.qty))
                          }}
                          disabled={item.qty === 1}
                        >
                          <RemoveIcon className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant='body1'
                          className={classes.quantity}
                        >
                          {item.qty}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <IconButton
                          onClick={(e) => {
                            e.preventDefault()
                            item.qty = item.qty + 1
                            dispatch(addToCart(item.product, item.qty))
                          }}
                          disabled={item.qty === item.quantity}
                        >
                          <AddIcon className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton
                          onClick={(e) => {
                            e.preventDefault()
                            dispatch(removeFromCart(item.product))
                          }}
                          disabled={item.qty === 0}
                        >
                          <DeleteIcon color='error' className={classes.icons} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Cart
