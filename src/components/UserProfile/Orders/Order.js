import React from 'react'
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  Button,
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useStyles } from '../styles'
import AlertMessage from '../../AlertMessage/AlertMessage'

const Order = () => {
  const user = useSelector((state) => state.user)
  const { userInfo } = user

  const classes = useStyles()
  return (
    <>
      <Grid container item justifyContent='center'>
        <Grid item xs={12}>
          <Typography
            align='center'
            variant='h5'
            gutterBottom
            className={classes.pageHeader}
          >
            Orders
          </Typography>
        </Grid>
        {userInfo && userInfo.orders && userInfo.orders.length === 0 && (
          <Grid item xs={8}>
            <AlertMessage
              severity={'info'}
              error={'You have not made any orders yet!'}
            />
          </Grid>
        )}

        {userInfo.orders.map((order) => (
          <Grid
            item
            container
            xs={11}
            sm={11}
            key={order._id}
            direction='column'
          >
            <Card className={classes.card}>
              <Grid item container xs={12} sm={12}>
                <CardContent
                  style={{
                    minWidth: '100%',
                  }}
                >
                  <Grid container direction='row'>
                    <Grid item xs={6} sm={6} md={3}>
                      <Typography
                        variant='h6'
                        className={classes.cardSubHeader}
                      >
                        Ordered On
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.cardSubHeaderText}
                      >
                        {order.createdAt.split('T')[0]}
                      </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={2}>
                      <Typography
                        variant='h6'
                        className={classes.cardSubHeader}
                      >
                        Total
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.cardSubHeaderText}
                      >
                        ${order.totalPrice}
                      </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3}>
                      <Typography
                        variant='h6'
                        className={classes.cardSubHeader}
                      >
                        Shipped To
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.cardSubHeaderText}
                      >
                        {order.name}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                      <Typography
                        variant='h6'
                        className={classes.cardSubHeader}
                      >
                        Order #{' '}
                      </Typography>
                      <Typography
                        variant='body2'
                        className={classes.cardSubHeaderText}
                      >
                        {order._id}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
              <Divider variant='fullWidth' />
              <Grid container item sm={12} direction='column'>
                <CardContent>
                  <Grid item>
                    <Typography
                      variant='h6'
                      gutterBottom
                      className={classes.cardSubHeader}
                    >
                      Delivered on {order.createdAt.split('T')[0]}
                    </Typography>
                  </Grid>

                  {order.orderItems.map((item) => (
                    <Grid
                      className={classes.product}
                      key={item._id}
                      container
                      item
                      xs={12}
                      sm={12}
                      justifyContent='space-between'
                      alignItems='center'
                    >
                      <Grid
                        item
                        xs={12}
                        sm={3}
                        className={classes.imageContainer}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className={classes.cardOrderImage}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Typography
                          variant='h6'
                          className={classes.cardSubHeader}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant='body1'
                          className={classes.cardSubHeaderText}
                        >
                          Quantity: {item.qty}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={3}
                        style={{ display: 'flex', flexDirection: 'column' }}
                      >
                        <Button
                          className={classes.button}
                          component={Link}
                          to={`/product/${item.product}`}
                          variant='contained'
                          color='primary'
                          size='small'
                        >
                          View Product
                        </Button>

                        <Button
                          className={classes.button}
                          component={Link}
                          to={`/product/${item.product}`}
                          variant='contained'
                          color='primary'
                          size='small'
                        >
                          Write Review
                        </Button>
                      </Grid>
                    </Grid>
                  ))}
                </CardContent>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Order
