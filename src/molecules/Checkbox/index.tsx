import React, { FC, useEffect, useState } from 'react'
import MuiSelect from '@material-ui/core/Select'
import { useStyles } from './styles'
import {
  FormControl,
  FormControlProps,
  FormHelperText,
  InputLabel,
  MenuItem,
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormLabel,
  FormGroup,
  FormControlLabel
} from '@material-ui/core'
import { CheckedIcon, UncheckedIcon } from './icons'

export type TCheckboxArgs = FormControlProps & {
  label: string
  helperText?: string
  error?: boolean
  disabled?: boolean
  values: boolean
  onChange?: (values: TCheckboxArgs['values']) => void
}

export type TCheckboxGroupArgs = FormControlProps & {
  label: string
  helperText?: string
  error?: boolean
  disabled?: boolean
  values: { [key: string]: boolean }
  onChange?: (values: TCheckboxGroupArgs['values']) => void
  options: { value: string; label: string; defaultState: boolean }[]
  horizontal: boolean
}

export const CheckboxGroup: FC<TCheckboxGroupArgs> = ({
  error = false,
  label,
  helperText,
  disabled = false,
  values,
  onChange,
  options,
  horizontal = false,
  ...props
}) => {
  const classes = useStyles()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    !!onChange &&
      onChange({ ...values, [event.target.name]: event.target.checked })
  }

  return (
    <FormControl error={error} disabled={disabled} {...props}>
      <FormLabel style={{ paddingBottom: '16px', fontWeight: 600 }}>
        {label}
      </FormLabel>
      <FormGroup style={{ flexDirection: horizontal ? 'row' : 'column' }}>
        {options.map((opt) => (
          <FormControlLabel
            key={opt.value}
            classes={{
              root: horizontal ? classes.rootH : classes.rootV,
              label: classes.label
            }}
            control={
              <MuiCheckbox
                icon={<UncheckedIcon disabled={disabled} />}
                checkedIcon={<CheckedIcon disabled={disabled} />}
                checked={values[opt.value]}
                onChange={handleChange}
                name={opt.value}
              />
            }
            label={opt.label}
          />
        ))}
      </FormGroup>
      <FormHelperText style={{ paddingTop: '19px' }}>
        {helperText}
      </FormHelperText>
    </FormControl>
  )
}
