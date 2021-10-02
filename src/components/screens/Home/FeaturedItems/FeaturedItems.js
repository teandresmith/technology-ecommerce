import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom'
import { Paper, Button, Grid, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useStyles } from './styles'

const FeaturedItems = () => {
  const productList = useSelector((state) => state.productList)
  const { products, loading } = productList

  const classes = useStyles()

  const items = productList &&
    !loading &&
    products &&
    products.length !== 0 && [
      {
        id: products[0]._id,
        name: products[0].name,
        image: products[0].image,
      },
      {
        id: products[1]._id,
        name: products[1].name,
        image: products[1].image,
      },
      {
        id: products[2]._id,
        name: products[2].name,
        image: products[2].image,
      },
    ]

  return (
    <>
      <Carousel
        navButtonsAlwaysVisible
        autoPlay={true}
        animation={'slide'}
        className={classes.carousel}
      >
        {productList &&
          products &&
          products.length !== 0 &&
          items.map((item) => (
            <Grid
              key={item.id}
              container
              item
              xs={12}
              justifyContent='center'
              className={classes.featuredItemContainer}
            >
              <Paper className={classes.paper}>
                <Grid
                  container
                  item
                  justifyContent='center'
                  alignItems='center'
                >
                  <Grid item>
                    <img
                      className={classes.image}
                      src={item.image}
                      alt={item.name}
                    />
                  </Grid>

                  <Grid
                    item
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      className={classes.itemName}
                      align='center'
                      variant='h4'
                      gutterBottom
                    >
                      Shop {item.name}
                    </Typography>
                    <Grid
                      item
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <Button
                        component={Link}
                        to={`/product/${item.id}`}
                        className={classes.button}
                        variant='contained'
                        color='primary'
                      >
                        View Product
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
      </Carousel>
    </>
  )
}

export default FeaturedItems
