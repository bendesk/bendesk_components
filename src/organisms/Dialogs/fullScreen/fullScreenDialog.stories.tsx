import React, { useEffect, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import FullScreenDialog from '.'
import generateDisabledArgsConfig from '../../../helpers/generateDisabledArgsConfig'
import { Button } from '@material-ui/core'
import { Typography } from '../../..'

const disabledArgs: string[] = [
  'color',
  'focused',
  'hiddenLabel',
  'required',
  'variant'
]

export default {
  title: 'Organisms/Dialog/FullScreenDialog',
  component: FullScreenDialog,
  args: {
    title: 'Dialog title...'
  },
  argTypes: { ...generateDisabledArgsConfig(disabledArgs) }
} as ComponentMeta<typeof FullScreenDialog>

export const Main: ComponentStory<typeof FullScreenDialog> = (args) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    console.log(open)
  }, [open])

  const handleClose = () => setOpen(false)

  return (
    <div style={{ padding: '20px', width: '220px' }}>
      <Button color='primary' variant='contained' onClick={() => setOpen(true)}>
        Show Dialog
      </Button>
      <FullScreenDialog
        {...args}
        open={open}
        handleClose={handleClose}
      >
        <Typography variant={'h1'} style={{ opacity: 0.2 }}>
          Contents
        </Typography>
      </FullScreenDialog>
    </div>
  )
}
