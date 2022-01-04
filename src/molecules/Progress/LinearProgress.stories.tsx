import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LinearProgress } from '.'
import generateDisabledArgsConfig from '../../helpers/generateDisabledArgsConfig'

const disabledArgs = [
  'variant',
]

export default {
  title: 'Molucules/Progress/LinearProgress',
  component: LinearProgress,
  args: {},
  argTypes: {
    ...generateDisabledArgsConfig(disabledArgs)
  }
} as ComponentMeta<typeof LinearProgress>

const Template: ComponentStory<typeof LinearProgress> = (args) => (
  <div style={{ padding: '20px', width: '220px' }}>
    <LinearProgress {...args} />
  </div>
)

export const Indeterminate = Template.bind({})
Indeterminate.args = { variant: 'indeterminate' }

export const Determinate = Template.bind({})
Determinate.args = { variant: 'determinate', value: 50 }
