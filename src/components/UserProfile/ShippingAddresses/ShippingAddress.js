import React, { useState, useEffect } from 'react'
import { Grid, Typography, IconButton } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, FormProvider } from 'react-hook-form'
import CustomTextField from '../../CustomTextField/CustomTextField'
import CustomSelector from '../../CustomSelector/CustomSelector'
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'
import {
  updateUserDefaultShippingAddress,
  getUserProfile,
} from '../../../redux/user/actions/action'

import { stateData } from '../../../asset/statesData'
import { countryData } from '../../../asset/countryData'

const ShippingAddress = () => {
  const dispatch = useDispatch()
  const [readOnly, setReadOnly] = useState(true)
  const user = useSelector((state) => state.user)
  const { userInfo } = user

  const methods = useForm()

  const states = stateData
  const country = countryData

  const edit = () => {
    setReadOnly(false)
  }

  const onSubmit = (data) => {
    console.log(data)
    setReadOnly(true)
    dispatch(updateUserDefaultShippingAddress(data))
  }

  useEffect(() => dispatch(getUserProfile()), [dispatch, readOnly])
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => onSubmit(data))}>
          <Grid container item xs={12} spacing={2} justifyContent='center'>
            <Grid item xs={12} sm={12}>
              <Typography
                variant='h5'
                gutterBottom
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                Default Shipping Address
              </Typography>
            </Grid>
            <CustomTextField
              defaultValue={
                userInfo &&
                userInfo.defaultShippingAddress &&
                userInfo.defaultShippingAddress.street
                  ? userInfo.defaultShippingAddress.street
                  : ''
              }
              variant='outlined'
              name='street'
              label='Street'
              InputProps={{ readOnly: readOnly }}
              gridSizes={[11, 5]}
            />
            <CustomTextField
              defaultValue={
                userInfo &&
                userInfo.defaultShippingAddress &&
                userInfo.defaultShippingAddress.city
                  ? userInfo.defaultShippingAddress.city
                  : ''
              }
              variant='outlined'
              name='city'
              label='City'
              InputProps={{ readOnly: readOnly }}
              gridSizes={[11, 5]}
            />
            <CustomSelector
              defaultValue={
                userInfo &&
                userInfo.defaultShippingAddress &&
                userInfo.defaultShippingAddress.state
                  ? userInfo.defaultShippingAddress.state
                  : states[0].value
              }
              variant='outlined'
              name='state'
              label='State'
              options={states}
              InputProps={{ readOnly: readOnly }}
              gridSizes={[11, 5]}
            />
            <CustomSelector
              defaultValue={
                userInfo &&
                userInfo.defaultShippingAddress &&
                userInfo.defaultShippingAddress.country
                  ? userInfo.defaultShippingAddress.country
                  : country[0].value
              }
              variant='outlined'
              name='country'
              label='Country'
              options={country}
              InputProps={{ readOnly: readOnly }}
              gridSizes={[11, 5]}
            />
            <CustomTextField
              defaultValue={
                userInfo &&
                userInfo.defaultShippingAddress &&
                userInfo.defaultShippingAddress.postalCode
                  ? userInfo.defaultShippingAddress.postalCode
                  : ''
              }
              variant='outlined'
              name='postalCode'
              label='Postal Code'
              InputProps={{ readOnly: readOnly }}
              gridSizes={[11, 5]}
            />
          </Grid>

          {readOnly ? (
            <>
              <IconButton onClick={edit}>
                <EditIcon />
              </IconButton>
            </>
          ) : (
            <IconButton type='submit'>
              <SaveIcon />
            </IconButton>
          )}
        </form>
      </FormProvider>
    </>
  )
}

export default ShippingAddress
