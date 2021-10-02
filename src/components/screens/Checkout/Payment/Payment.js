import React from 'react'
import { Typography, Button, Divider, Grid } from '@material-ui/core'
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useSelector, useDispatch } from 'react-redux'
import Review from './Review/Review'
import { clearCart } from '../../../../redux/cart/actions/actions'
import { createNewOrder } from '../../../../redux/order/actions/actions'
import AlertMessage from '../../../AlertMessage/AlertMessage'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const Payment = ({ previousStep, nextStep }) => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const shippingData = useSelector((state) => state.shippingData)
  const { shippingInfo } = shippingData

  const user = useSelector((state) => state.user)
  const { userInfo } = user

  const dispatch = useDispatch()

  const cartTotalPrice = cartItems
    .reduce((acc, items) => acc + items.qty * items.price, 0)
    .toFixed(2)

  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault()

    if (!stripe || !elements) return

    const cardElement = elements.getElement(CardElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })

    const loginedUser =
      userInfo && userInfo.name && userInfo._id ? userInfo._id : ''

    if (error) {
      console.log(error)
    } else {
      const order =
        loginedUser === ''
          ? {
              orderItems: cartItems,
              shippingAddress: {
                street: shippingInfo.street,
                city: shippingInfo.city,
                state: shippingInfo.state,
                country: shippingInfo.country,
                postalCode: shippingInfo.postalCode,
              },
              name: `${shippingInfo.firstName} ${shippingInfo.lastName}`,
              email: shippingInfo.email,
              paymentMethod: 'Stripe',
              paymentResult: {
                id: paymentMethod.id,
              },
              shippingPrice: 0.0,
              totalPrice: cartTotalPrice,
            }
          : {
              orderItems: cartItems,
              shippingAddress: {
                street: shippingInfo.street,
                city: shippingInfo.city,
                state: shippingInfo.state,
                country: shippingInfo.country,
                postalCode: shippingInfo.postalCode,
              },
              name: `${shippingInfo.firstName} ${shippingInfo.lastName}`,
              email: shippingInfo.email,
              paymentMethod: 'Stripe',
              paymentResult: {
                id: paymentMethod.id,
              },
              shippingPrice: 0.0,
              totalPrice: cartTotalPrice,
              user: loginedUser,
            }
      dispatch(createNewOrder(order))
      dispatch(clearCart())
      nextStep()
    }
  }

  // Payment ID -> paymentMethod.id

  return (
    <>
      <Grid container item>
        <Review />
        <Divider />
        <Grid container item>
          <Grid container item justifyContent='center'>
            <AlertMessage
              severity={'info'}
              error={
                'Use Card # 4242-4242-4242-4242 | MM/YY:  04/24 | CVC: 242 | Zip: 42424 to test payment operations'
              }
            />
          </Grid>
          <Grid item container>
            <Grid item xs={12} style={{ paddingTop: '10px' }}>
              <Typography variant='h6' gutterBottom>
                Payment Method
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Elements stripe={stripePromise}>
                <ElementsConsumer>
                  {({ elements, stripe }) => (
                    <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                      <CardElement />

                      <br />
                      <br />
                      <div>
                        <Button
                          variant='outlined'
                          onClick={previousStep}
                          style={{ marginRight: '5px' }}
                        >
                          Back
                        </Button>
                        <Button
                          type='submit'
                          variant='contained'
                          disabled={!stripe}
                          color='primary'
                        >
                          Pay $
                          {cartItems
                            .reduce(
                              (acc, item) => acc + item.qty * item.price,
                              0
                            )
                            .toFixed(2)}
                        </Button>
                      </div>
                    </form>
                  )}
                </ElementsConsumer>
              </Elements>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Payment
