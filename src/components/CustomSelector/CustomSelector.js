import React from 'react'
import { Grid, Select, MenuItem, InputLabel } from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form'

const CustomSelector = ({
  name,
  label,
  required,
  options,
  defaultValue,
  variant,
  InputProps,
  gridSizes,
}) => {
  const { control } = useFormContext()
  return (
    <>
      <Grid
        item
        xs={gridSizes ? gridSizes[0] : 12}
        sm={gridSizes ? gridSizes[1] : 6}
      >
        <InputLabel>{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          required={required}
          defaultValue={defaultValue || options[0].value}
          render={({ field }) => (
            <Select
              {...field}
              fullWidth
              variant={variant ? variant : 'standard'}
              inputProps={InputProps ? InputProps : {}}
            >
              {options.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </Grid>
    </>
  )
}

export default CustomSelector
