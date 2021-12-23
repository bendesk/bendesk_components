import React, { useEffect, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { RadiobuttonGroup, Radiobutton } from '.'
import generateDisabledArgsConfig from '../../helpers/generateDisabledArgsConfig'

const disabledArgs: string[] = [
  'color',
  'focused',
  'hiddenLabel',
  'variant',
  'fullWidth',
  'margin',
  'size',
  'value',
  'options',
  'horizontal'
]

const options = [
  { label: 'Label 1', value: '1' },
  { label: 'Label 3', value: '3' },
  { label: 'Label 2', value: '2' },
  { label: 'Label 4', value: '4' },
  { label: 'Label 5', value: '5' },
  {
    label: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ',
    value: '6'
  }
]

export default {
  title: 'Molucules/Inputs/RadiobuttonGroup',
  component: RadiobuttonGroup,
  args: {
    label: 'Group label',
    error: false,
    helperText: 'Information label',
    disabled: false
  },
  argTypes: { ...generateDisabledArgsConfig(disabledArgs) }
} as ComponentMeta<typeof RadiobuttonGroup>


export const Vertical: ComponentStory<typeof RadiobuttonGroup> = (
  args
) => {
  const [selected, setSelected] = useState<string>('')
  useEffect(() => {
    console.log(selected)
  }, [selected])
  return (
    <div style={{ padding: '20px', width: '220px' }}>
      <RadiobuttonGroup
        {...args}
        options={options}
        value={selected}
        onChange={(value) => setSelected(value)}
      />
    </div>
  )
}

export const Horizontal: ComponentStory<typeof RadiobuttonGroup> = (
  args
) => {
  const [selected, setSelected] = useState<string>('')
  useEffect(() => {
    console.log(selected)
  }, [selected])
  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <RadiobuttonGroup
        {...args}
        options={options}
        value={selected}
        onChange={(value) => setSelected(value)}
        horizontal
      />
    </div>
  )
}
