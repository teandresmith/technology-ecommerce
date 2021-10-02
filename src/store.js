import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productsReducer,
  productReducer,
  filteredProductReducer,
} from './redux/products/reducers/productsReducer'
import { cartReducer } from './redux/cart/reducer/cartReducer'
import { shippingInfoReducer } from './redux/shippingInfo/reducers/reducers'
import { orderReducer } from './redux/order/reducers/orderReducer'
import { userReducer } from './redux/user/reducers/userReducer'

const reducer = combineReducers({
  productList: productsReducer,
  productDetails: productReducer,
  cart: cartReducer,
  shippingData: shippingInfoReducer,
  order: orderReducer,
  user: userReducer,
  filteredProducts: filteredProductReducer,
})

const getCartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const getUserInfoFromStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : {}

const initialState = {
  cart: {
    cartItems: getCartItemsFromStorage,
  },
  user: {
    userInfo: getUserInfoFromStorage,
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
