import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { logout } from '../../redux/user/actions/action'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import {
  AppBar,
  Typography,
  Grid,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import StoreIcon from '@material-ui/icons/Store'
import { useStyles } from './styles'
import { clearCart } from '../../redux/cart/actions/actions'
import { clearShippingInfo } from '../../redux/shippingInfo/actions/actions'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const user = useSelector((state) => state.user)
  const { userInfo } = user

  const dispatch = useDispatch()
  const history = useHistory()

  const classes = useStyles()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const logoutHandler = () => {
    dispatch(logout())
    dispatch(clearCart())
    dispatch(clearShippingInfo())
    history.push('/')
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid
            className={classes.appbar}
            container
            justifyContent='space-between'
            alignItems='center'
          >
            <Grid item>
              <Typography
                className={classes.brand}
                component={Link}
                to='/'
                variant='h5'
                color='inherit'
              >
                eCommerce
              </Typography>
            </Grid>

            <Grid
              item
              className={classes.navItems}
              style={{ alignItems: 'center' }}
            >
              {userInfo.name ? (
                <>
                  {' '}
                  <IconButton color='inherit' onClick={handleClick}>
                    <PersonIcon className={classes.icons} />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    keepMounted
                    onClose={handleClose}
                  >
                    <MenuItem
                      className={classes.icons}
                      component={Link}
                      to='/profile'
                    >
                      {userInfo.name}'s Profile
                    </MenuItem>
                    <MenuItem className={classes.icons} onClick={logoutHandler}>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Typography
                    component={Link}
                    to='/login'
                    className={classes.navItem}
                    variant='h6'
                    color='inherit'
                  >
                    Login
                  </Typography>
                </>
              )}
              <IconButton
                component={Link}
                to='/products'
                className={classes.navItem}
                color='inherit'
              >
                <StoreIcon className={classes.icons} />
              </IconButton>
              <IconButton
                component={Link}
                to='/cart'
                color='inherit'
                aria-label='Show cart items'
                size='small'
              >
                <Badge
                  className={classes.badge}
                  badgeContent={cartItems.reduce(
                    (acc, item) => acc + item.qty,
                    0
                  )}
                  color='secondary'
                >
                  <ShoppingCartIcon className={classes.icons} />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default Navbar
