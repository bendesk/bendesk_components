import React, { FC, useState } from 'react'
import MuiTextField from '@material-ui/core/TextField'
import { useStyles } from './styles'
import { InputAdornment, InputProps, TextFieldProps } from '@material-ui/core'
import Cleave from 'cleave.js/react'

export type TTextFieldArgs = TextFieldProps & {
  prefix?: JSX.Element | string
  suffix?: JSX.Element | string
  helperText?: string
  error?: boolean
}

export const TextField: FC<TTextFieldArgs> = ({
  variant = 'outlined',
  fullWidth = true,
  prefix,
  suffix,
  InputProps,
  type,
  ...props
}) => {
  const classes = useStyles()
  return (
    <MuiTextField
      classes={classes}
      variant={variant}
      fullWidth={fullWidth}
      InputProps={{
        startAdornment: !!prefix && (
          <InputAdornment position='start'>{prefix}</InputAdornment>
        ),
        endAdornment: !!suffix && (
          <InputAdornment position='end'>{suffix}</InputAdornment>
        ),
        ...(type === 'date' ? { inputComponent: DateInput } : {}),
        ...InputProps
      }}
      type={type === 'date' ? 'text' : type}
      {...props}
    />
  )
}

function DateInput({ inputRef, ...props }: any) {
  return (
    <Cleave
      ref={inputRef}
      options={{
        date: true,
        delimiter: '/',
        datePattern: ['d', 'm', 'Y'],
        numericOnly: true,
        delimiterLazyShow: false
      }}
      {...props}
    />
  )
}
