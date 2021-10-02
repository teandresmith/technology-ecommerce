import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/products/actions/productActions'
import { Grid, CircularProgress, Typography, Button } from '@material-ui/core'
import Product from './Product/Product'
import AlertMessage from '../AlertMessage/AlertMessage'
import useStyles from './styles'

const Products = () => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  const history = useHistory()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      {loading ? (
        <main className={classes.loader}>
          <Typography variant='h6'>
            Products loading...one moment please
          </Typography>
          <CircularProgress size={150} />
        </main>
      ) : error ? (
        <AlertMessage severity={'error'} error={error} />
      ) : (
        <>
          <main className={classes.root}>
            <Grid container justifyContent='center'>
              {products.map((product) => (
                <Grid
                  key={product._id}
                  item
                  xs={12}
                  sm={5}
                  md={4}
                  lg={3}
                  style={{ margin: '5px 15px' }}
                >
                  <Product product={product} />
                </Grid>
              ))}
            </Grid>
          </main>
        </>
      )}
    </>
  )
}

export default Products
