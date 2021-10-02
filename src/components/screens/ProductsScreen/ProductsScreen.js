import React, { useEffect, useState } from 'react'

import {
  filterProducts,
  getProducts,
  clearFilter,
  sortFilteredList,
  sortProductList,
} from '../../../redux/products/actions/productActions'
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Toolbar,
  Divider,
  Button,
  Menu,
  MenuItem,
  CircularProgress,
} from '@material-ui/core'
import Navbar from '../../Navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../../Products/Product/Product'
import { useStyles } from './styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const ProductsScreen = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const [filterBy, setFilterBy] = useState('All Products')
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const handleClose = (event) => {
    setAnchorEl(null)
    setOpen(false)
  }

  const productList = useSelector((state) => state.productList)
  const { loading, products } = productList

  const filteredProducts = useSelector((state) => state.filteredProducts)
  const { filtered } = filteredProducts

  const dispatch = useDispatch()

  const categories = [
    'Mobile Phone',
    'Laptop',
    'Desktop',
    'Tablet',
    'TV',
    'Head Phone',
  ]

  const brands = [
    'Google',
    'Apple',
    'Asus',
    'Sony',
    'Samsung',
    'Bose',
    'Amazon',
  ]

  const sortList = ['A-Z', 'Z-A', 'Descending $', 'Ascending $']

  const prices = [100, 500, 1000, 1500, 2000]

  const filterByCategory = (category) => {
    dispatch(filterProducts('Category', category, products))
    setFilterBy(category)
  }

  const filterByBrand = (brand) => {
    dispatch(filterProducts('Brand', brand, products))
    setFilterBy(`Products from ${brand}`)
  }

  const filterByPrice = (price) => {
    dispatch(filterProducts('Price', price, products))
    setFilterBy(`Products less than $${price}`)
  }

  const clearFilterHandler = () => {
    dispatch(clearFilter())
    setFilterBy('All Products')
  }

  const sortFilteredHandler = (type) => {
    if (filteredProducts && filtered && filtered.length === 0) {
      dispatch(sortProductList(products, type))
    } else {
      dispatch(sortFilteredList(filtered, type))
    }
    setAnchorEl(null)
    setOpen(false)
  }

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <>
      <Navbar />
      <Toolbar />
      <Grid container justifyContent='center'>
        {matches ? (
          <MobileView />
        ) : (
          <>
            <Grid
              item
              container
              sm={3}
              className={classes.sidebar}
              justifyContent='center'
            >
              <Grid item xs={10}>
                <List>
                  <Typography variant='h6' className={classes.filterHeader}>
                    Filter by Category
                  </Typography>
                  {categories.map((category) => (
                    <React.Fragment key={category}>
                      <ListItem
                        onClick={() => filterByCategory(category)}
                        className={classes.filterItems}
                      >
                        <ListItemText
                          disableTypography={true}
                          className={classes.filterItemText}
                        >
                          <Typography className={classes.filterItemText}>
                            {category}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <Divider variant='middle' />
                    </React.Fragment>
                  ))}
                </List>
              </Grid>

              <Grid item xs={10}>
                <List>
                  <Typography variant='h6' className={classes.filterHeader}>
                    Filter by Brand
                  </Typography>
                  {brands.map((brand) => (
                    <React.Fragment key={brand}>
                      <ListItem
                        onClick={() => filterByBrand(brand)}
                        className={classes.filterItems}
                      >
                        <ListItemText
                          disableTypography={true}
                          className={classes.filterItemText}
                        >
                          <Typography
                            variant='body1'
                            className={classes.filterItemText}
                          >
                            {brand}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <Divider variant='middle' />
                    </React.Fragment>
                  ))}
                </List>
              </Grid>
              <Grid item xs={10}>
                <List>
                  <Typography variant='h6' className={classes.filterHeader}>
                    Filter by Price
                  </Typography>
                  {prices.map((price) => (
                    <React.Fragment key={price}>
                      <ListItem
                        onClick={() => filterByPrice(price)}
                        className={classes.filterItems}
                      >
                        <ListItemText disableTypography={true}>
                          <Typography className={classes.filterItemText}>
                            Less than ${price}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <Divider variant='middle' />
                    </React.Fragment>
                  ))}
                </List>
              </Grid>
            </Grid>
            <Grid item container sm={8} style={{}}>
              <Grid
                item
                container
                xs={12}
                justifyContent='space-between'
                className={classes.productsHeader}
              >
                <Grid item style={{}}>
                  <Typography variant='h4' className={classes.headerText}>
                    {filterBy}
                  </Typography>
                </Grid>
                <Divider variant='fullWidth' />
                <Grid item>
                  <Button
                    variant='text'
                    onClick={handleClick}
                    className={classes.sortByHeader}
                  >
                    Sort By
                  </Button>
                  <Menu
                    id='simple-menu'
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                  >
                    {sortList.map((item) => (
                      <MenuItem
                        key={item}
                        className={classes.sortByHeader}
                        onClick={() => sortFilteredHandler(item)}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </Menu>
                  {filteredProducts && filtered.length !== 0 && (
                    <>
                      <Button
                        className={classes.sortByHeader}
                        variant='text'
                        color='inherit'
                        onClick={() => clearFilterHandler()}
                      >
                        Clear Filter
                      </Button>
                    </>
                  )}
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                className={classes.productsContainer}
              >
                {(productList && loading) || filterProducts.loading ? (
                  <main style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='h6'>
                      Product details loading...one moment please
                    </Typography>
                    <CircularProgress size={125} />
                  </main>
                ) : productList &&
                  products &&
                  filteredProducts &&
                  filtered.length === 0 ? (
                  products.map((product) => (
                    <Grid item xs={12} sm={5} md={4} key={product._id}>
                      <Product product={product} customClass={classes} />
                    </Grid>
                  ))
                ) : (
                  filtered.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product._id}>
                      <Product product={product} customClass={classes} />
                    </Grid>
                  ))
                )}
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </>
  )
}

const MobileView = () => {
  const classes = useStyles()
  const [filterBy, setFilterBy] = useState('All Products')
  const [anchorEl, setAnchorEl] = useState(null)
  const [sortByOpen, setSortByOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [brandOpen, setBrandOpen] = useState(false)
  const [priceOpen, setPriceOpen] = useState(false)

  const handleClick = (event, type) => {
    setAnchorEl(event.currentTarget)
    switch (type) {
      case 'sort':
        setSortByOpen(true)
        break
      case 'category':
        setCategoryOpen(true)
        break
      case 'brand':
        setBrandOpen(true)
        break
      case 'price':
        setPriceOpen(true)
        break
      default:
        break
    }
  }

  const handleClose = (event, type) => {
    setAnchorEl(null)
    switch (type) {
      case 'sort':
        setSortByOpen(false)
        break
      case 'category':
        setCategoryOpen(false)
        break
      case 'brand':
        setBrandOpen(false)
        break
      case 'price':
        setPriceOpen(false)
        break
      default:
        break
    }
  }

  const productList = useSelector((state) => state.productList)
  const { loading, products } = productList

  const filteredProducts = useSelector((state) => state.filteredProducts)
  const { filtered } = filteredProducts

  const dispatch = useDispatch()

  const categories = [
    'Mobile Phone',
    'Laptop',
    'Desktop',
    'Tablet',
    'TV',
    'Head Phone',
  ]

  const brands = [
    'Google',
    'Apple',
    'Asus',
    'Sony',
    'Samsung',
    'Bose',
    'Amazon',
  ]

  const sortList = ['A-Z', 'Z-A', 'Descending $', 'Ascending $']

  const prices = [100, 500, 1000, 1500, 2000]

  const filterByCategory = (category) => {
    dispatch(filterProducts('Category', category, products))
    setFilterBy(category)
    setCategoryOpen(false)
  }

  const filterByBrand = (brand) => {
    dispatch(filterProducts('Brand', brand, products))
    setFilterBy(`Products from ${brand}`)
    setBrandOpen(false)
  }

  const filterByPrice = (price) => {
    dispatch(filterProducts('Price', price, products))
    setFilterBy(`Products less than $${price}`)
    setPriceOpen(false)
  }

  const clearFilterHandler = () => {
    dispatch(clearFilter())
    setFilterBy('All Products')
  }

  const sortFilteredHandler = (type) => {
    if (filteredProducts && filtered && filtered.length === 0) {
      dispatch(sortProductList(products, type))
    } else {
      dispatch(sortFilteredList(filtered, type))
    }
    setAnchorEl(null)
    setSortByOpen(false)
  }
  return (
    <Grid item container xs={12}>
      <Grid
        item
        container
        xs={12}
        justifyContent='space-between'
        className={classes.productsHeader}
      >
        <Grid item xs={12}>
          <Typography variant='h4' className={classes.headerText}>
            {filterBy}
          </Typography>
        </Grid>
        <Divider variant='fullWidth' />
        <Grid item>
          <Button variant='text' onClick={(e) => handleClick(e, 'category')}>
            Category
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={categoryOpen}
            onClose={(e) => handleClose(e, 'category')}
          >
            {categories.map((category) => (
              <MenuItem
                key={category}
                onClick={() => filterByCategory(category)}
              >
                {category}
              </MenuItem>
            ))}
          </Menu>
          <Button variant='text' onClick={(e) => handleClick(e, 'brand')}>
            Brand
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={brandOpen}
            onClose={(e) => handleClose(e, 'brand')}
          >
            {brands.map((brand) => (
              <MenuItem key={brand} onClick={() => filterByBrand(brand)}>
                {brand}
              </MenuItem>
            ))}
          </Menu>
          <Button variant='text' onClick={(e) => handleClick(e, 'price')}>
            Price
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={priceOpen}
            onClose={(e) => handleClose(e, 'price')}
          >
            {prices.map((price) => (
              <MenuItem key={price} onClick={() => filterByPrice(price)}>
                {'< '}${price}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
        <Grid item>
          <Button variant='text' onClick={(e) => handleClick(e, 'sort')}>
            Sort By
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={sortByOpen}
            onClose={(e) => handleClose(e, 'sort')}
          >
            {sortList.map((item) => (
              <MenuItem key={item} onClick={() => sortFilteredHandler(item)}>
                {item}
              </MenuItem>
            ))}
          </Menu>
          {filteredProducts && filtered.length !== 0 && (
            <>
              <Button
                variant='text'
                color='inherit'
                onClick={() => clearFilterHandler()}
              >
                Clear Filter
              </Button>
            </>
          )}
        </Grid>
      </Grid>
      <Grid container item xs={12} className={classes.productsContainer}>
        {(productList && loading) || filterProducts.loading ? (
          <main style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='h6'>
              Product details loading...one moment please
            </Typography>
            <CircularProgress size={125} />
          </main>
        ) : productList &&
          products &&
          filteredProducts &&
          filtered.length === 0 ? (
          products.map((product) => (
            <Grid item xs={12} sm={4} md={4} key={product._id}>
              <Product product={product} customClass={classes} />
            </Grid>
          ))
        ) : (
          filtered.map((product) => (
            <Grid item xs={12} sm={4} md={4} key={product._id}>
              <Product product={product} customClass={classes} />
            </Grid>
          ))
        )}
        {}
      </Grid>
    </Grid>
  )
}

export default ProductsScreen
