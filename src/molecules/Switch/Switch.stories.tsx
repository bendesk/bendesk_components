import React, { useEffect, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Switch } from '.'
import generateDisabledArgsConfig from '../../helpers/generateDisabledArgsConfig'

const disabledArgs: string[] = [
  'color',
  'focused',
  'hiddenLabel',
  'required',
  'variant',
  'children',
  'fullWidth',
  'value',
  'name'
]

export default {
  title: 'Molucules/Inputs/Switch',
  component: Switch,
  args: {
    label: 'Group label',
    error: false,
    helperText: 'Information label',
    disabled: false
  },
  argTypes: { ...generateDisabledArgsConfig(disabledArgs) }
} as ComponentMeta<typeof Switch>

export const Single: ComponentStory<typeof Switch> = (args) => {
  const [value, setValue] = useState(false)
  useEffect(() => {
    console.log(value)
  }, [value])
  return (
    <div style={{ padding: '20px', width: '220px' }}>
      <Switch
        {...args}
        value={value}
        onChange={(value) => setValue(value)}
        name='Label'
      />
    </div>
  )
}
