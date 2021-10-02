import { CLEAR_SHIPPING_INFO, SET_SHIPPING_INFO } from '../constants/constants'

export const setShippingInfo = (data) => (dispatch) => {
  dispatch({
    type: SET_SHIPPING_INFO,
    payload: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      street: data.streetAddress,
      city: data.city,
      state: data.state,
      country: data.country,
      postalCode: data.zip,
    },
  })
}

export const clearShippingInfo = () => (dispatch) => {
  dispatch({
    type: CLEAR_SHIPPING_INFO,
  })
}
