import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
} from '../constants/constants'

export const orderReducer = (state = { orderInfo: {} }, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { loading: true }
    case CREATE_ORDER_SUCCESS:
      return { loading: false, orderInfo: action.payload }
    case CREATE_ORDER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
