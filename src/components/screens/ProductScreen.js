import React, { useEffect } from 'react'
import { Typography, CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/products/actions/productActions'
import Navbar from '../Navbar/Navbar'
import ProductDetails from '../ProductDetails/ProductDetails'

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading } = productDetails

  useEffect(() => {
    dispatch(getProduct(match.params.id))
  }, [dispatch, match])
  return (
    <>
      {loading ? (
        <main style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant='h6'>
            Product details loading...one moment please
          </Typography>
          <CircularProgress size={125} />
        </main>
      ) : (
        <>
          <Navbar />
          <ProductDetails />
        </>
      )}
    </>
  )
}

export default ProductScreen
