import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import CustomTextField from '../../../CustomTextField/CustomTextField'
import CustomSelector from '../../../CustomSelector/CustomSelector'

import { stateData } from '../../../../asset/statesData'
import { countryData } from '../../../../asset/countryData'
import { useSelector, useDispatch } from 'react-redux'
import { clearShippingInfo } from '../../../../redux/shippingInfo/actions/actions'
import { getUserProfile } from '../../../../redux/user/actions/action'
import { useStyles } from '../styles'

const ShippingAddress = ({ next }) => {
  const methods = useForm()
  const states = stateData
  const dispatch = useDispatch()
  const shippingData = useSelector((state) => state.shippingData)
  const { shippingInfo } = shippingData

  const user = useSelector((state) => state.user)
  const { userInfo } = user

  const country = countryData

  const classes = useStyles()

  const clearForm = () => {
    methods.setValue('firstName', '')
    methods.setValue('lastName', '')
    methods.setValue('email', '')
    methods.setValue('streetAddress', '')
    methods.setValue('city', '')
    methods.setValue('zip', '')
    methods.setValue('state', states[0].value)
    dispatch(clearShippingInfo())
  }

  const useDefaultShipping = () => {
    methods.setValue('firstName', userInfo.name.split(' ')[0])
    methods.setValue('lastName', userInfo.name.split(' ')[1])
    methods.setValue('email', userInfo.email)
    methods.setValue('streetAddress', userInfo.defaultShippingAddress.street)
    methods.setValue('city', userInfo.defaultShippingAddress.city)
    methods.setValue('zip', userInfo.defaultShippingAddress.postalCode)
    const defaultState = states.filter(
      (x) => x.value === userInfo.defaultShippingAddress.state
    )
    methods.setValue('state', defaultState[0].value)
  }

  useEffect(() => {
    if (userInfo && userInfo.name && userInfo.token) {
      dispatch(getUserProfile())
    }
  }, [dispatch])

  return (
    <>
      <Grid container item direction='column'>
        <Grid item style={{ paddingTop: '15px' }}>
          <Typography variant='h6' gutterBottom align='center'>
            Shipping Address
          </Typography>
        </Grid>
        <Grid item container>
          {userInfo &&
            userInfo.name &&
            userInfo.token &&
            userInfo.defaultShippingAddress && (
              <Button
                onClick={useDefaultShipping}
                variant='outlined'
                color='primary'
                style={{ margin: '10px 0px' }}
              >
                Use Default Shipping Address
              </Button>
            )}
        </Grid>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit((data) => next(data))}>
            <Grid container item spacing={3}>
              <CustomTextField
                required
                variant='outlined'
                name='firstName'
                label='First Name'
                defaultValue={shippingInfo.firstName || ''}
              />
              <CustomTextField
                required
                variant='outlined'
                name='lastName'
                label='Last Name'
                defaultValue={shippingInfo.lastName || ''}
              />
              <CustomTextField
                required
                variant='outlined'
                name='email'
                label='Email'
                defaultValue={shippingInfo.email || ''}
              />
              <CustomTextField
                required
                variant='outlined'
                name='streetAddress'
                label='Street Address'
                defaultValue={shippingInfo.street ? shippingInfo.street : ''}
              />
              <CustomTextField
                required
                variant='outlined'
                name='city'
                label='City'
                defaultValue={shippingInfo.city || ''}
              />
              <CustomTextField
                required
                variant='outlined'
                name='zip'
                label='Postal Code'
                defaultValue={shippingInfo.postalCode || ''}
              />
              <CustomSelector
                name='state'
                label='State'
                required
                options={states}
                variant='outlined'
                defaultValue={shippingInfo.state || ''}
              />
              <CustomSelector
                name='country'
                label='Country'
                required
                options={country}
                defaultValue={shippingInfo.country || ''}
                variant='outlined'
              />
            </Grid>
            <Grid item container className={classes.buttonContainer}>
              <Grid item>
                <Button
                  className={classes.button}
                  component={Link}
                  to='/cart'
                  variant='contained'
                >
                  Back to Cart
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.button}
                  variant='contained'
                  color='secondary'
                  onClick={() => clearForm()}
                >
                  Clear Form
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.button}
                  type='submit'
                  variant='contained'
                  color='primary'
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Grid>
    </>
  )
}

export default ShippingAddress
