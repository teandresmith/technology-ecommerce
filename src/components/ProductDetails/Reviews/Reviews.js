import React, { useEffect, useState } from 'react'
import {
  Grid,
  Typography,
  Avatar,
  Button,
  IconButton,
  Modal,
  Box,
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { useForm, FormProvider } from 'react-hook-form'
import { newProductReview } from '../../../redux/products/actions/productActions'
import CustomTextField from '../../CustomTextField/CustomTextField'
import Rating from '@material-ui/lab/Rating'
import SendIcon from '@material-ui/icons/Send'
import AlertMessage from '../../AlertMessage/AlertMessage'
import { useStyles } from '../styles'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const Reviews = ({ match }) => {
  const [open, setOpen] = useState(false)
  const [rating, setRating] = useState(3)
  const [message, setMessage] = useState('')
  const productDetails = useSelector((state) => state.productDetails)
  const { product } = productDetails

  const methods = useForm()

  const classes = useStyles()

  const dispatch = useDispatch()

  const onClickHandler = () => {
    if (open) setOpen(false)
    else setOpen(true)
  }

  const submitComment = (data) => {
    if (rating !== null) {
      data = { ...data, rating }
      methods.setValue('name', 'Anon')
      methods.setValue('comment', '')
      setRating(3)
      setOpen(false)
      dispatch(newProductReview(product._id, data))
    } else {
      setMessage('Please select a rating')
    }
  }

  const closeMessage = () => {
    setMessage('')
  }

  useEffect(() => {}, [dispatch, match, product, productDetails])
  return (
    <>
      <Grid container item xs={12} sm={5} className={classes.reviewContainer}>
        <Typography variant='h3' gutterBottom className={classes.reviewHeader}>
          Reviews
        </Typography>
        <Grid container item direction='column'>
          <Typography variant='h5' className={classes.reviewTextSub}>
            Customer Rating
          </Typography>
          <Typography variant='h3' className={classes.reviewRatingText}>
            {product && product.rating && product.rating.toFixed(2)}
          </Typography>
          <Rating
            name='reviews'
            value={product.rating}
            precision={0.5}
            readOnly
            size='large'
            className={classes.reviewRating}
          />
          <Typography variant='subtitle1' className={classes.reviewSubText}>
            ({product && product.reviews && product.reviews.length} Review)
          </Typography>
          <Grid container item>
            <Grid item>
              <Button
                variant='contained'
                color='primary'
                onClick={onClickHandler}
                className={classes.reviewButton}
              >
                Write a Review
              </Button>
            </Grid>
            <Grid container item sm={12}>
              <Modal open={open} onClose={onClickHandler}>
                <Box sx={style} className={classes.modalStyles}>
                  <FormProvider {...methods}>
                    <form
                      onSubmit={methods.handleSubmit((data) =>
                        submitComment(data)
                      )}
                    >
                      <Grid container item>
                        <CustomTextField
                          name='name'
                          label='Name'
                          defaultValue={'Anon'}
                          variant='outlined'
                          gridSizes={[12, 12]}
                          required={true}
                        />
                        {message && (
                          <AlertMessage
                            onClose={closeMessage}
                            severity={'error'}
                            error={message}
                          />
                        )}
                        <Grid item xs={12}>
                          <Rating
                            onChange={(e, newValue) => setRating(newValue)}
                            name='rating'
                            size='large'
                            precision={0.5}
                            value={rating}
                          />
                        </Grid>
                        <CustomTextField
                          name='comment'
                          label='Comment'
                          defaultValue=''
                          variant='outlined'
                          gridSizes={[12, 12]}
                          multiline={true}
                          required={true}
                        />
                      </Grid>
                      <Grid container item justifyContent='flex-end'>
                        <IconButton type='submit' color='primary'>
                          <SendIcon />
                        </IconButton>
                      </Grid>
                    </form>
                  </FormProvider>
                </Box>
              </Modal>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={7} className={classes.commentsContainer}>
        {product && product.reviews && product.reviews.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant='h5' className={classes.reviewText}>
              No Customer Reviews for this product yet. Be the First!
            </Typography>
          </Grid>
        ) : (
          <>
            {product.reviews && (
              <Grid container item>
                {product.reviews.map((review) => (
                  <Grid
                    key={review._id}
                    container
                    item
                    style={{ padding: '10px 5px' }}
                  >
                    <Grid item container alignItems='center'>
                      <Avatar className={classes.avatar} />
                      <Grid item>
                        <Typography
                          variant='h5'
                          gutterBottom
                          className={classes.avatarName}
                        >
                          {review.name}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container item>
                      <Grid item>
                        <Rating
                          name='name'
                          value={review.rating}
                          readOnly
                          precision={0.5}
                          className={classes.reviewRating}
                        />
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.comment} variant='body1'>
                        {review.comment}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            )}
          </>
        )}
      </Grid>
    </>
  )
}

export default Reviews
