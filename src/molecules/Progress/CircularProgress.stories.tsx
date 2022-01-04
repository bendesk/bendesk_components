import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CircularProgress } from '.'
import generateDisabledArgsConfig from '../../helpers/generateDisabledArgsConfig'

const disabledArgs = ['variant']

export default {
  title: 'Molucules/Progress/CircularProgress',
  component: CircularProgress,
  args: {},
  argTypes: {
    ...generateDisabledArgsConfig(disabledArgs)
  }
} as ComponentMeta<typeof CircularProgress>

const Template: ComponentStory<typeof CircularProgress> = (args) => (
  <div style={{ padding: '20px', width: '220px' }}>
    <CircularProgress {...args} />
  </div>
)

export const Indeterminate = Template.bind({})
Indeterminate.args = { variant: 'indeterminate' }

export const Determinate = Template.bind({})
Determinate.args = { variant: 'determinate', value: 50 }
