import React, { useEffect } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import CustomTextField from '../../CustomTextField/CustomTextField'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../../../redux/user/actions/action'
import { updateUserAccountDetails } from '../../../redux/user/actions/action'

const AccountInfo = () => {
  const user = useSelector((state) => state.user)
  const { userInfo } = user
  const dispatch = useDispatch()

  const methods = useForm()

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      dispatch(updateUserAccountDetails(data))
      methods.setValue('password', '')
      methods.setValue('confirmPassword', '')
    }
  }

  useEffect(() => {
    dispatch(getUserProfile())
  }, [dispatch])

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
                Account Details
              </Typography>
            </Grid>

            <CustomTextField
              defaultValue={userInfo ? userInfo.name : ''}
              label='Name'
              name='name'
              variant='outlined'
              gridSizes={[11, 8]}
            />
            <CustomTextField
              defaultValue={userInfo ? userInfo.email : ''}
              label='Email'
              name='email'
              variant='outlined'
              type='email'
              gridSizes={[11, 8]}
            />
            <CustomTextField
              defaultValue=''
              label='Password'
              name='password'
              variant='outlined'
              type='password'
              gridSizes={[11, 8]}
            />
            <CustomTextField
              defaultValue=''
              label='Confirm Password'
              name='confirmPassword'
              variant='outlined'
              type='password'
              gridSizes={[11, 8]}
            />
          </Grid>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '10px',
            }}
          >
            <Button type='submit' variant='contained' color='primary'>
              Save Changes
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default AccountInfo
