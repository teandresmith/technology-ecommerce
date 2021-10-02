import React from 'react'
import Product from '../../../Products/Product/Product'
import { useSelector } from 'react-redux'
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from './styles'

const LatestProducts = () => {
  const productList = useSelector((state) => state.productList)
  const { products } = productList

  const latestItems = products.slice(3, 9)

  const classes = useStyles()

  return (
    <>
      <Grid container>
        <Grid
          item
          container
          justifyContent='center'
          className={classes.latestItemContainer}
        >
          <Typography className={classes.header} variant='h3' gutterBottom>
            Latest Products
          </Typography>
        </Grid>

        <Grid
          className={classes.latestItem}
          container
          item
          justifyContent='center'
        >
          {latestItems.map((product) => (
            <Grid
              key={product._id}
              item
              xs={12}
              sm={4}
              md={4}
              lg={3}
              className={classes.productContainer}
            >
              <Product product={product} customClass={classes} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default LatestProducts
