import React, { useEffect, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CheckboxGroup } from '.'
import generateDisabledArgsConfig from '../../helpers/generateDisabledArgsConfig'

const disabledArgs: string[] = [
  'color',
  'focused',
  'hiddenLabel',
  'required',
  'variant'
]

const options = [
  { label: 'Label 1', value: '1', defaultState: false },
  { label: 'Label 3', value: '3', defaultState: false },
  { label: 'Label 2', value: '2', defaultState: false },
  { label: 'Label 4', value: '4', defaultState: false },
  { label: 'Label 5', value: '5', defaultState: false },
  {
    label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ',
    value: '6',
    defaultState: false
  }
]
const generateDefaultState = (opts: typeof options) =>
  opts.reduce((prev, curr) => ({ ...prev, [curr.value]: false }), {})

export default {
  title: 'Molucules/Inputs/CheckboxGroup',
  component: CheckboxGroup,
  args: {
    label: 'Group label',
    error: false,
    helperText: 'Information label',
    disabled: false
  },
  argTypes: { ...generateDisabledArgsConfig(disabledArgs) }
} as ComponentMeta<typeof CheckboxGroup>

export const Vertical: ComponentStory<typeof CheckboxGroup> = (args) => {
  const [selected, setSelected] = useState(generateDefaultState(options))
  useEffect(() => {
    console.log(selected)
  }, [selected])
  return (
    <div style={{ padding: '20px', width: '220px' }}>
      <CheckboxGroup
        {...args}
        options={options}
        values={selected}
        onChange={(values) => setSelected(values)}
      />
    </div>
  )
}

export const Horizontal: ComponentStory<typeof CheckboxGroup> = (args) => {
  const [selected, setSelected] = useState(generateDefaultState(options))
  useEffect(() => {
    console.log(selected)
  }, [selected])
  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <CheckboxGroup
        {...args}
        options={options}
        values={selected}
        onChange={(values) => setSelected(values)}
        horizontal
      />
    </div>
  )
}
