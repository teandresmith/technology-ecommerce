import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
} from '../constants/constants'
import axios from 'axios'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://technology-ecommerce.herokuapp.com/api/products/${id}`
  )

  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      quantity: data.quantity,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const clearCart = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART,
  })

  localStorage.removeItem('cartItems')
}
