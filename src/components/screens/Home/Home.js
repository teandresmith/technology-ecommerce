import React, { useEffect } from 'react'
import Navbar from '../../Navbar/Navbar'
import FeaturedItems from './FeaturedItems/FeaturedItems'
import LatestProducts from './LatestProducts/LatestProducts'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography, CircularProgress } from '@material-ui/core'
import { getProducts } from '../../../redux/products/actions/productActions'

const Home = () => {
  const productList = useSelector((state) => state.productList)
  const { products, loading } = productList

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <>
      {loading && products.length === 0 ? (
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          direction='column'
        >
          <Typography variant='h6'>
            Products loading...one moment please
          </Typography>
          <CircularProgress size={150} />
        </Grid>
      ) : (
        <>
          <Navbar />
          <FeaturedItems />
          <LatestProducts />
        </>
      )}
    </>
  )
}

export default Home
