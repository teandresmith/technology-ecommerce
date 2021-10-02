import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Grid, Typography, Button, Container, Toolbar } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import CustomTextField from '../CustomTextField/CustomTextField'
import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/user/actions/action'
import AlertMessage from '../AlertMessage/AlertMessage'

const Login = () => {
  const methods = useForm()
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const { userInfo, error } = user

  const onSubmit = (data) => {
    dispatch(login(data.email, data.password))
  }

  const handleClose = () => {}

  useEffect(() => {
    if (userInfo && userInfo.name && userInfo.token) {
      history.push('/')
    }
  }, [userInfo, history])

  return (
    <>
      <Navbar />
      <Toolbar />
      <Container maxWidth='md'>
        {error && (
          <AlertMessage
            severity={'error'}
            error={error}
            onClose={handleClose}
          />
        )}
        <Typography variant='h6'>Login</Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit((data) => onSubmit(data))}>
            <Grid container spacing={3}>
              <CustomTextField
                required
                variant='outlined'
                type='email'
                name='email'
                label='Email'
                defaultValue={''}
                gridSizes={[12, 12]}
              />
              <CustomTextField
                variant='outlined'
                required
                name='password'
                label='Password'
                type='password'
                defaultValue=''
                gridSizes={[12, 12]}
              />
            </Grid>
            <Grid
              item
              container
              alignItems='center'
              style={{ marginTop: '10px' }}
            >
              <Button type='submit' variant='contained' color='primary'>
                Login
              </Button>
              <Button component={Link} to='/register' variant='text'>
                New User? Register Here
              </Button>
            </Grid>
          </form>
        </FormProvider>
      </Container>
    </>
  )
}

export default Login
