import React from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from '@material-ui/core'
import { useSelector } from 'react-redux'

const Review = () => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  return (
    <>
      <Grid container item>
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom align='center'>
            Order Summary
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <List disablePadding>
            {cartItems.map((item) => (
              <ListItem style={{ padding: '10px 0' }} key={item.product}>
                <ListItemText
                  primary={item.name}
                  secondary={`Quantity: ${item.qty}`}
                />
                <Typography variant='body2'>
                  ${item.price * item.qty}
                </Typography>
              </ListItem>
            ))}
            <ListItem style={{ padding: '10px 0' }}>
              <ListItemText primary='Total' />
              <Typography variant='subtitle1'>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  )
}

export default Review
