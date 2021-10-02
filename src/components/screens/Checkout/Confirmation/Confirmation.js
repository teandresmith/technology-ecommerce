import React from 'react'
import { Typography, Button, CircularProgress, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Confirmation = () => {
  const order = useSelector((state) => state.order)
  const { orderInfo, loading } = order
  return (
    <>
      {loading ? (
        <CircularProgress size={125} />
      ) : (
        <>
          <Grid container item>
            <Grid item>
              <Typography variant='h5'>
                {orderInfo.name},<br /> Thank you for shopping with eCommerce.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6'>
                Your order number is {orderInfo.id} !
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant='contained'
                color='primary'
                component={Link}
                to='/'
              >
                Go back Home
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </>
  )
}

export default Confirmation
