import { Snackbar as MuiSnackbar, SnackbarProps } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import React, { FC } from 'react'
import { useStyles } from './styles'

export type TSnackbarArgs = SnackbarProps & {
  type: 'info' | 'success' | 'error'
  icon?: React.ReactNode
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}
export const Snackbar: FC<TSnackbarArgs> = ({
  autoHideDuration = 6000,
  onClose,
  type = 'info',
  icon,
  message,
  ...props
}) => {
  const classes = useStyles()
  return (
    <MuiSnackbar
      onClose={onClose}
      autoHideDuration={autoHideDuration}
      {...props}
    >
      <Alert
        onClose={onClose as AlertProps['onClose']}
        severity={type}
        icon={icon}
        classes={{
          filledError: classes.filledError,
          filledInfo: classes.filledInfo,
          filledSuccess: classes.filledSuccess
        }}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  )
}
