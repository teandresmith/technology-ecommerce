import axios from 'axios'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILED,
  UPDATE_DEFAULT_ADDRESS_SUCCESS,
  UPDATE_DEFAULT_ADDRESS_FAILED,
  UPDATE_ACCOUNT_DETAILS_SUCCESS,
  UPDATE_ACCOUNT_DETAILS_FAILED,
  LOGOUT,
} from '../constants/constants'

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const isAdmin = false

    const { data } = await axios.post(
      'https://technology-ecommerce.herokuapp.com/api/users/register',
      { name, email, password, isAdmin },
      config
    )

    dispatch({ type: REGISTER_SUCCESS, payload: data })

    const user = {
      name: data.name,
      token: data.token,
    }

    localStorage.setItem('user', JSON.stringify(user))
  } catch (error) {
    dispatch({
      type: REGISTER_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      'https://technology-ecommerce.herokuapp.com/api/users/login',
      { email, password },
      config
    )
    dispatch({ type: LOGIN_SUCCESS, payload: data })

    const { name, token } = data

    const user = {
      name: name,
      token: token,
    }

    localStorage.setItem('user', JSON.stringify(user))
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT })
  localStorage.removeItem('user')
}

export const getUserProfile = () => async (dispatch, getState) => {
  try {
    const { userInfo } = getState().user

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearers ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(
      'https://technology-ecommerce.herokuapp.com/api/users/profile',
      config
    )

    dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: GET_USER_PROFILE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateUserDefaultShippingAddress =
  (shippingInfo) => async (dispatch, getState) => {
    try {
      const { userInfo } = getState().user
      const { street, city, state, country, postalCode } = shippingInfo

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearers ${userInfo.token}`,
        },
      }

      const { data } = await axios.put(
        'https://technology-ecommerce.herokuapp.com/api/users/profile/defaultShipping',
        { street, city, state, country, postalCode },
        config
      )
      dispatch({ type: UPDATE_DEFAULT_ADDRESS_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: UPDATE_DEFAULT_ADDRESS_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const updateUserAccountDetails =
  (accountDetails) => async (dispatch, getState) => {
    try {
      const { name, email, password } = accountDetails
      const { userInfo } = getState().user

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearers ${userInfo.token}`,
        },
      }

      const { data } = await axios.put(
        'https://technology-ecommerce.herokuapp.com/api/users/profile/accountDetails',
        { name, email, password },
        config
      )

      dispatch({ type: UPDATE_ACCOUNT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: UPDATE_ACCOUNT_DETAILS_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
