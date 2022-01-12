import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Snackbar } from '.'
import generateDisabledArgsConfig from '../../helpers/generateDisabledArgsConfig'
import { Button } from '@material-ui/core'

const disabledArgs = []

export default {
  title: 'Molucules/Progress/Snackbar',
  component: Snackbar,
  args: { message: 'This is the message!', autoHideDuration: 6000 },
  argTypes: {
    ...generateDisabledArgsConfig(disabledArgs)
  }
} as ComponentMeta<typeof Snackbar>

const Template: ComponentStory<typeof Snackbar> = (args) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div style={{ padding: '20px', width: '220px' }}>
      <Button
        color='primary'
        variant='contained'
        onClick={() => setIsVisible(true)}
      >
        Show Message
      </Button>
      <Snackbar
        open={isVisible}
        onClose={() => setIsVisible(false)}
        {...args}
      />
    </div>
  )
}

export const Indeterminate = Template.bind({})
Indeterminate.args = {}
