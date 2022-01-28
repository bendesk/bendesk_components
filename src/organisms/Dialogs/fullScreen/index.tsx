import React, { CSSProperties, FC, ReactNode } from 'react'
import { useStyles } from './styles'
import {
  Slide,
  DialogProps,
  Dialog,
  Toolbar,
  Button,
  IconButton
} from '@material-ui/core'
import { colorSet } from '../../../theme/palette'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import CloseIcon from '@material-ui/icons/Close'
import clsx from 'clsx'
import { Typography } from '../../..'
import { TransitionProps } from '@material-ui/core/transitions'

export type TFullScreenDialogArgs = DialogProps & {
  showBack: boolean
  open: boolean
  title: string | ReactNode
  handleBack: () => void
  handleClose: () => void
  style: CSSProperties
  disableTransition: boolean
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

const FullScreenDialog: FC<TFullScreenDialogArgs> = ({
  children,
  handleClose,
  style,
  title,
  handleBack,
  showBack,
  open,
  disableTransition = false
}) => {
  const classes = useStyles()

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      PaperProps={{ style: { borderRadius: '16px 16px 0px 0px' } }}
      TransitionComponent={Transition}
      transitionDuration={disableTransition ? 1 : 500}
      style={{ marginTop: '32px' }}
    >
      <Toolbar
        style={{
          display: 'inline-table',
          borderBottom: `1px solid ${colorSet['borderGrey']}`,
          padding: '0px'
        }}
      >
        <div
          className={clsx(classes.toolbarSpacing, classes.toolbarContainer)}
          style={{
            marginTop: '24px',
            flex: 1,
            display: 'inline-flex',
            width: '100%'
          }}
        >
          <div className={classes.title}>
            {showBack && (
              <Button
                size='small'
                variant='text'
                onClick={() => handleBack()}
                startIcon={<ArrowBackIcon />}
              >
                Back
              </Button>
            )}
          </div>
          <div>
            <IconButton
              disableFocusRipple
              disableRipple
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon color='primary' />
            </IconButton>
          </div>
        </div>
        <Typography
          className={classes.toolbarSpacing}
          variant='h2'
          style={{ marginBottom: '24px', marginTop: '24px' }}
        >
          {title}
        </Typography>
      </Toolbar>
      {children}
    </Dialog>
  )
}
export default FullScreenDialog
