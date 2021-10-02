import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Grid, Typography, Button, Container, Toolbar } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import CustomTextField from '../CustomTextField/CustomTextField'
import Navbar from '../Navbar/Navbar'
import { register } from '../../redux/user/actions/action'
import { useDispatch } from 'react-redux'
import AlertMessage from '../AlertMessage/AlertMessage'
import { useSelector } from 'react-redux'

const Register = () => {
  const [message, setMessage] = useState('')
  const methods = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.user)
  const { error, userInfo } = user

  const onSubmit = (data) => {
    const name = `${data.firstName} ${data.lastName}`
    if (data.password === data.confirmPassword) {
      dispatch(register(name, data.email, data.password))
    } else {
      setMessage('Password and Confirm Password fields do not match')
    }
  }

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
        <Typography variant='h6'>Register</Typography>
        {message && <AlertMessage severity={'error'} error={message} />}
        {error && <AlertMessage severity={'error'} error={error} />}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit((data) => onSubmit(data))}>
            <Grid container spacing={2}>
              <CustomTextField
                required
                variant='outlined'
                name='firstName'
                label='First Name'
                defaultValue={''}
                gridSizes={[12, 12]}
              />
              <CustomTextField
                required
                variant='outlined'
                name='lastName'
                label='Last Name'
                defaultValue={''}
                gridSizes={[12, 12]}
              />
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
                required
                variant='outlined'
                type='password'
                name='password'
                label='Password'
                defaultValue={''}
                gridSizes={[12, 12]}
              />
              <CustomTextField
                required
                variant='outlined'
                type='password'
                name='confirmPassword'
                label='Confirm Password'
                defaultValue={''}
                gridSizes={[12, 12]}
              />
            </Grid>
            <Grid
              style={{ marginTop: '10px' }}
              item
              container
              alignItems='center'
            >
              <Button type='submit' variant='contained' color='primary'>
                Register
              </Button>
              <Button variant='text' component={Link} to='/login'>
                Have an Account? Sign in Here
              </Button>
            </Grid>
          </form>
        </FormProvider>
      </Container>
    </>
  )
}

export default Register
