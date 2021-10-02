import { SET_SHIPPING_INFO, CLEAR_SHIPPING_INFO } from '../constants/constants'

export const shippingInfoReducer = (state = { shippingInfo: {} }, action) => {
  switch (action.type) {
    case SET_SHIPPING_INFO:
      return { shippingInfo: action.payload }
    case CLEAR_SHIPPING_INFO:
      return { shippingInfo: {} }
    default:
      return state
  }
}
