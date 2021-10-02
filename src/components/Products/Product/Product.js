import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
  IconButton,
  Snackbar,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import AlertMessage from '../../AlertMessage/AlertMessage'
import useStyles from './styles'
import { addToCart } from '../../../redux/cart/actions/actions'

const Product = ({ product, customClass }) => {
  const [quantity, setQuantity] = useState(1)
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
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

  const incrementQuantity = (e) => {
    e.preventDefault()
    setQuantity(quantity + 1)
  }

  const decrementQuantity = (e) => {
    e.preventDefault()
    setQuantity(quantity - 1)
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
      <Card className={customClass && customClass.card}>
        <CardActionArea>
          <CardMedia
            component={Link}
            to={`/product/${product._id}`}
            image={product.image}
            title={product.name}
            className={customClass ? customClass.image : classes.image}
          />
        </CardActionArea>
        <CardContent>
          <div className={classes.name}>
            <Typography
              gutterBottom
              variant='h5'
              className={
                customClass && customClass.productName
                  ? customClass.productName
                  : ''
              }
            >
              {product.name}
            </Typography>
            <Typography
              variant='h6'
              color='textSecondary'
              className={
                customClass && customClass.price ? customClass.price : ''
              }
            >
              ${product.price}
            </Typography>
          </div>
          <Typography
            className={
              customClass && customClass.brand ? customClass.brand : ''
            }
            variant='body1'
            color='textSecondary'
          >
            {product.brand}
          </Typography>

          <Typography
            className={
              customClass && customClass.rating ? customClass.rating : ''
            }
            variant='body2'
            gutterBottom
          >
            <Rating
              name='product-rating'
              className={
                customClass && customClass.rating ? customClass.rating : ''
              }
              value={roundToNearestHalf(product.rating) || 0}
              precision={0.5}
              readOnly
            />{' '}
            ({product.rating.toFixed(2)})
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={decrementQuantity} disabled={quantity === 1}>
            <RemoveIcon
              className={
                customClass && customClass.actionIcons
                  ? customClass.actionIcons
                  : ''
              }
            />
          </IconButton>
          <Typography
            value={quantity}
            variant='body1'
            className={customClass && customClass.qty ? customClass.qty : ''}
          >
            {quantity}
          </Typography>
          <IconButton
            onClick={incrementQuantity}
            disabled={quantity === product.quantity}
          >
            <AddIcon
              className={
                customClass && customClass.actionIcons
                  ? customClass.actionIcons
                  : ''
              }
            />
          </IconButton>
          <IconButton onClick={addToCartHandler}>
            <AddShoppingCartIcon
              className={
                customClass && customClass.actionIcons
                  ? customClass.actionIcons
                  : ''
              }
            />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}

export default Product
