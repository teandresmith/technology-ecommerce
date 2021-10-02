import {
  Container,
  Stepper,
  Step,
  StepLabel,
  Toolbar,
  Paper,
  Grid,
} from '@material-ui/core'
import React, { useState } from 'react'
import Confirmation from './Confirmation/Confirmation'
import ShippingAddress from './ShippingAddress/ShippingAddress'
import Payment from './Payment/Payment'
import { useDispatch } from 'react-redux'
import { setShippingInfo } from '../../../redux/shippingInfo/actions/actions'
import { useStyles } from './styles'

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0)
  const dispatch = useDispatch()

  const classes = useStyles()

  const steps = [
    'Enter Shipping Address',
    'Define Payment Method',
    'Confirmation',
  ]

  const nextStep = () => {
    setActiveStep((step) => step + 1)
  }

  const previousStep = () => {
    setActiveStep((step) => step - 1)
  }

  const next = (data) => {
    dispatch(setShippingInfo(data))
    nextStep()
  }

  const getStepContent = (activeStep) => {
    switch (activeStep) {
      case 0:
        return <ShippingAddress next={next} />
      case 1:
        return <Payment previousStep={previousStep} nextStep={nextStep} />
      case 2:
        return <Confirmation />
      default:
        return 'There was an error'
    }
  }

  return (
    <>
      <Container maxWidth='md'>
        <Paper>
          <Toolbar />
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Grid container className={classes.container}>
            {getStepContent(activeStep)}
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export default Checkout
