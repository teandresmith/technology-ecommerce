import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import Home from './components/screens/Home/Home'
import ProductScreen from './components/screens/ProductScreen'
import Cart from './components/screens/Cart/Cart'
import Checkout from './components/screens/Checkout/Checkout'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import UserProfile from './components/UserProfile/UserProfile'
import ProductsScreen from './components/screens/ProductsScreen/ProductsScreen'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/profile' component={UserProfile} />
          <Route exact path='/products' component={ProductsScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </Router>
    </>
  )
}

export default App
