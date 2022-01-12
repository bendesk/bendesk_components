import React, { useEffect, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from '.'
import { MenuItem } from '@material-ui/core'
import generateDisabledArgsConfig from '../../helpers/generateDisabledArgsConfig'

const disabledArgs: string[] = [
  'color',
  'focused',
  'hiddenLabel',
  'required',
  'variant'
]

export default {
  title: 'Molucules/Inputs/Select',
  component: Select,
  args: {
    label: 'label',
    error: false,
    helperText: 'Helper Text',
    disabled: false
  },
  argTypes: { ...generateDisabledArgsConfig(disabledArgs) }
} as ComponentMeta<typeof Select>

export const SingleSelect: ComponentStory<typeof Select> = (args) => {
  const [selected, setSelected] = useState<string>('')
  useEffect(() => {
    console.log(selected)
  }, [selected])
  return (
    <div style={{ padding: '20px', width: '220px' }}>
      <Select
        {...args}
        value={selected}
        onChange={(e) => setSelected(e.target.value as string)}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={40}>Forty</MenuItem>
        <MenuItem value={50}>Fifty</MenuItem>
        <MenuItem value={60}>Sixty</MenuItem>
        <MenuItem value={70}>Seventy</MenuItem>
        <MenuItem value={80}>Eighty</MenuItem>
        <MenuItem value={90}>Ninety</MenuItem>
      </Select>
    </div>
  )
}

export const MultiSelect: ComponentStory<typeof Select> = (args) => {
  const [selected, setSelected] = useState<string[]>([])
  useEffect(() => {
    console.log(selected)
  }, [selected])
  return (
    <div style={{ padding: '20px', width: '220px' }}>
      <Select
        {...args}
        multiple
        value={selected}
        onChange={(e) => setSelected(e.target.value as string[])}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={40}>Forty</MenuItem>
        <MenuItem value={50}>Fifty</MenuItem>
        <MenuItem value={60}>Sixty</MenuItem>
        <MenuItem value={70}>Seventy</MenuItem>
        <MenuItem value={80}>Eighty</MenuItem>
        <MenuItem value={90}>Ninety</MenuItem>
      </Select>
    </div>
  )
}
