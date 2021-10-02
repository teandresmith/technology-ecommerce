import {
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAILED,
  FILTERED_PRODUCTS_REQUEST,
  FILTERED_PRODUCTS_SUCCESS,
  FILTERED_PRODUCTS_FAILED,
  CLEAR_FILTER,
  SORT_PRODUCTS,
  SORT_PRODUCTS_FAILED,
} from '../constants/constants'

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_REQUEST:
      return { loading: true, products: [] }
    case PRODUCTS_FETCH_SUCCESS:
    case SORT_PRODUCTS:
      return { loading: false, products: action.payload }
    case PRODUCTS_FETCH_FAIL:
    case SORT_PRODUCTS_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, product: { reviews: [] } }
    case PRODUCT_DETAILS_SUCCESS:
    case NEW_REVIEW_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
    case NEW_REVIEW_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const filteredProductReducer = (state = { filtered: [] }, action) => {
  switch (action.type) {
    case FILTERED_PRODUCTS_REQUEST:
    case CLEAR_FILTER:
      return { loading: true, filtered: [] }
    case FILTERED_PRODUCTS_SUCCESS:
      return { loading: false, filtered: action.payload }
    case FILTERED_PRODUCTS_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
