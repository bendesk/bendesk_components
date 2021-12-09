import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Chip, TArgs } from '.'
import { Avatar, Grid } from '@material-ui/core'
import colors from '../../shared/colors'
import generateDisabledArgsConfig from '../../helpers/generateDisabledArgsConfig'

const disabledArgs = [
  'variant',
  'textColor',
  'onDelete',
  'avatar',
  'children',
  'deleteIcon',
  'icon',
  'color'
]

export default {
  title: 'Molucules/Chip',
  component: Chip,
  args: {
    label: 'chip'
  },
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    ...generateDisabledArgsConfig(disabledArgs)
  }
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => (
  <Grid container spacing={3} direction='column'>
    <Grid item>
      <Chip onDelete={undefined} {...args} />
    </Grid>
    <Grid item>
      <Chip
        avatar={
          <Avatar style={{ backgroundColor: '#08306C', color: '#fff' }}>
            M
          </Avatar>
        }
        onDelete={undefined}
        {...args}
      />
    </Grid>
    <Grid item>
      <Chip {...args} />
    </Grid>
    <Grid item>
      <Chip
        avatar={
          <Avatar style={{ backgroundColor: '#08306C', color: '#fff' }}>
            M
          </Avatar>
        }
        {...args}
      />
    </Grid>
  </Grid>
)

export const Filled = Template.bind({})
Filled.args = {
  variant: 'default',
  backgroundColor: colors['blue'],
  textColor: '#fff'
}

export const Outlined = Template.bind({})
Outlined.args = { variant: 'outlined'}
