import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TextField } from '.'
import { Avatar, Grid, IconButton } from '@material-ui/core'
import generateDisabledArgsConfig from '../../helpers/generateDisabledArgsConfig'
import { VisibilityOutlined } from '@material-ui/icons'

const disabledArgs: string[] = ['suffix', 'hiddenLabel', 'focused']

export default {
  title: 'Molucules/TextField',
  component: TextField,
  args: {
    label: 'label',
    error: false,
    helperText: 'Helper Text',
    disabled: false
  },
  argTypes: { ...generateDisabledArgsConfig(disabledArgs) }
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => (
  <div style={{ padding: '20px', width: args.multiline ? '420px' : '220px' }}>
    <TextField {...args} />
  </div>
)

export const ValueOnly = Template.bind({})

export const WithSuffix = Template.bind({})
WithSuffix.args = {
  suffix: (
    <IconButton style={{ padding: 0 }}>
      <VisibilityOutlined />
    </IconButton>
  )
}

export const WithPrefix = Template.bind({})
WithPrefix.args = {
  prefix: 'Kg'
}

export const Multiline = Template.bind({})
Multiline.args = { multiline: true, rows: 5 }

export const FormattingDate = Template.bind({})
FormattingDate.args = {
  type: 'date',
  placeholder: '__/__/____',
  helperText: 'dd / mm / yyyy'
}
