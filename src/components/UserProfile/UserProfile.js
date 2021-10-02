import React, { useEffect, useState } from 'react'
import { getUserProfile } from '../../redux/user/actions/action'
import { useDispatch } from 'react-redux'
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import ReceiptIcon from '@material-ui/icons/Receipt'
import Navbar from '../Navbar/Navbar'
import AccountInfo from './AccountInfo/AccountInfo'
import ShippingAddress from './ShippingAddresses/ShippingAddress'
import Order from './Orders/Order'
import { useStyles } from './styles'

const UserProfile = () => {
  const [tab, setTab] = useState(0)

  const dispatch = useDispatch()

  const classes = useStyles()

  const tabs = [
    {
      label: 'Account Details',
      icon: <AccountBoxIcon className={classes.tabIcon} />,
      tabNumber: 0,
    },
    {
      label: 'Shipping Address',
      icon: <LocalShippingIcon className={classes.tabIcon} />,
      tabNumber: 1,
    },
    {
      label: 'Orders',
      icon: <ReceiptIcon className={classes.tabIcon} />,
      tabNumber: 2,
    },
  ]

  const selectedTab = (tabNumber) => {
    switch (tabNumber) {
      case 0:
        return <AccountInfo />
      case 1:
        return <ShippingAddress />
      case 2:
        return <Order />
      default:
        return 'Something went wrong'
    }
  }

  useEffect(() => dispatch(getUserProfile()), [dispatch])
  return (
    <>
      <Navbar />
      <Toolbar />

      <Grid container alignContent='center'>
        <Grid
          item
          xs={12}
          sm={3}
          container
          direction='column'
          alignContent='center'
        >
          <Grid item container sm={12}>
            <List style={{ paddingLeft: '20px' }}>
              {tabs.map((tab) => (
                <ListItem
                  button
                  key={tab.label}
                  onClick={() => setTab(tab.tabNumber)}
                  divider
                >
                  <Grid container item alignItems='center'>
                    <Grid item>{tab.icon}</Grid>

                    <ListItemText disableTypography>
                      <Typography variant='h5' className={classes.tabLabel}>
                        {tab.label}
                      </Typography>
                    </ListItemText>
                  </Grid>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Grid item container direction='column' xs={12} sm={9}>
          <Grid container item>
            {selectedTab(tab)}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default UserProfile
