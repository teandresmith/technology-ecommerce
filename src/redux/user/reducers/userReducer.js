import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILED,
  LOGOUT,
  UPDATE_DEFAULT_ADDRESS_SUCCESS,
  UPDATE_DEFAULT_ADDRESS_FAILED,
  UPDATE_ACCOUNT_DETAILS_FAILED,
  UPDATE_ACCOUNT_DETAILS_SUCCESS,
} from '../constants/constants'

export const userReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return { loading: true, userInfo: {} }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case GET_USER_PROFILE_SUCCESS:
    case UPDATE_DEFAULT_ADDRESS_SUCCESS:
    case UPDATE_ACCOUNT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: { ...state.userInfo, ...action.payload },
      }
    case LOGIN_FAILED:
    case REGISTER_FAILED:
    case GET_USER_PROFILE_FAILED:
    case UPDATE_DEFAULT_ADDRESS_FAILED:
    case UPDATE_ACCOUNT_DETAILS_FAILED:
      return { loading: false, error: action.payload, userInfo: {} }
    case LOGOUT:
      return { userInfo: {} }

    default:
      return state
  }
}
