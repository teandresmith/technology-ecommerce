import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
} from '../constants/constants'
import axios from 'axios'

export const createNewOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const {
      orderItems,
      shippingAddress,
      name,
      email,
      paymentMethod,
      paymentResult,
      shippingPrice,
      totalPrice,
      user,
    } = order

    const { data } =
      user === ''
        ? await axios.post(
            '/api/orders/create',
            {
              orderItems,
              shippingAddress,
              name,
              email,
              paymentMethod,
              paymentResult,
              shippingPrice,
              totalPrice,
            },
            config
          )
        : await axios.post(
            '/api/orders/create',
            {
              orderItems,
              shippingAddress,
              name,
              email,
              paymentMethod,
              paymentResult,
              shippingPrice,
              totalPrice,
              user,
            },
            config
          )

    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
