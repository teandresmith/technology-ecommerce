import axios from 'axios'
import {
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  FILTERED_PRODUCTS_REQUEST,
  FILTERED_PRODUCTS_SUCCESS,
  FILTERED_PRODUCTS_FAILED,
  CLEAR_FILTER,
  SORT_FILTERED_PRODUCTS,
  SORT_FILTERED_FAILED,
  SORT_PRODUCTS,
  SORT_PRODUCTS_FAILED,
} from '../constants/constants'

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_FETCH_REQUEST })
    const { data } = await axios.get(
      'https://technology-ecommerce.herokuapp.com/api/products/'
    )

    dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCTS_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })

    const { data } = await axios.get(
      `https://technology-ecommerce.herokuapp.com/api/products/${id}`
    )

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const newProductReview = (id, reviewInfo) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST })

    const { name, comment, rating } = reviewInfo

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.put(
      `https://technology-ecommerce.herokuapp.com/api/products/${id}/review`,
      { name, comment, rating },
      config
    )
    dispatch({ type: NEW_REVIEW_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const filterProducts = (filterBy, value, list) => async (dispatch) => {
  try {
    dispatch({ type: FILTERED_PRODUCTS_REQUEST })

    var filteredList
    switch (filterBy) {
      case 'Brand':
        filteredList = list.filter((x) => x.brand === value)
        break
      case 'Category':
        filteredList = list.filter((x) => x.category === value)
        break
      case 'Price':
        filteredList = list.filter((x) => x.price <= value)
        break
      default:
        filteredList = []
    }

    dispatch({ type: FILTERED_PRODUCTS_SUCCESS, payload: filteredList })
  } catch (error) {
    dispatch({
      type: FILTERED_PRODUCTS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const sortFilteredList = (list, sortBy) => async (dispatch) => {
  try {
    var sortedList
    switch (sortBy) {
      case 'A-Z':
        sortedList = list.sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase()

          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1
          }
          return 0
        })
        break
      case 'Z-A':
        sortedList = list.sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase()

          if (fa > fb) {
            return -1
          }
          if (fa < fb) {
            return 1
          }
          return 0
        })
        break
      case 'Descending $':
        sortedList = list.sort((a, b) => b.price - a.price)
        break
      case 'Ascending $':
        sortedList = list.sort((a, b) => a.price - b.price)
        break
      default:
        return list
    }

    dispatch({ type: SORT_FILTERED_PRODUCTS, payload: sortedList })
  } catch (error) {
    dispatch({
      type: SORT_FILTERED_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const sortProductList = (list, sortBy) => async (dispatch) => {
  try {
    var sortedList
    switch (sortBy) {
      case 'A-Z':
        sortedList = list.sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase()

          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1
          }
          return 0
        })
        break
      case 'Z-A':
        sortedList = list.sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase()

          if (fa > fb) {
            return -1
          }
          if (fa < fb) {
            return 1
          }
          return 0
        })
        break
      case 'Descending $':
        sortedList = list.sort((a, b) => b.price - a.price)
        break
      case 'Ascending $':
        sortedList = list.sort((a, b) => a.price - b.price)
        break
      default:
        return list
    }

    dispatch({ type: SORT_PRODUCTS, payload: sortedList })
  } catch (error) {
    dispatch({
      type: SORT_PRODUCTS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const clearFilter = () => async (dispatch) => {
  dispatch({ type: CLEAR_FILTER })
}
