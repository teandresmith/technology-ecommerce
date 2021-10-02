import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form'

const CustomTextField = ({
  name,
  label,
  required,
  defaultValue,
  gridSizes,
  type,
  variant,
  InputProps,
  multiline,
}) => {
  const { control } = useFormContext()
  return (
    <>
      <Grid
        item
        xs={gridSizes ? gridSizes[0] : 12}
        sm={gridSizes ? gridSizes[1] : 6}
      >
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              type={type ? type : 'text'}
              variant={variant ? variant : 'standard'}
              fullWidth
              label={label}
              required={required ? required : false}
              InputProps={InputProps ? InputProps : {}}
              multiline={multiline ? multiline : false}
            />
          )}
          control={control}
          name={name}
          defaultValue={defaultValue}
        />
      </Grid>
    </>
  )
}

export default CustomTextField
