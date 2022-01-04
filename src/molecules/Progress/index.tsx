import {
  LinearProgress as MuiLinearProgress,
  CircularProgress as MuiCircularProgress,
  LinearProgressProps,
  CircularProgressProps
} from '@material-ui/core'
import React, { FC } from 'react'

export type TLinearProgressArgs = LinearProgressProps & {}
export type TCircularProgressArgs = CircularProgressProps & {}

export const LinearProgress: FC<TLinearProgressArgs> = ({
  variant = 'indeterminate',
  ...props
}) => {
  return <MuiLinearProgress variant={variant} {...props} />
}

export const CircularProgress: FC<TCircularProgressArgs> = ({
  variant = 'indeterminate',
  ...props
}) => {
  return <MuiCircularProgress variant={variant} {...props} />
}
