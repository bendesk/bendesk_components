import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Avatar } from '.'
import generateDisabledArgsConfig from '../../helpers/generateDisabledArgsConfig'

const disabledArgs = ['srcSet', 'src', 'sizes', 'imgProps', 'children', 'alt']

export default {
  title: 'Molucules/Avatar',
  component: Avatar,
  args: {},
  argTypes: {
    ...generateDisabledArgsConfig(disabledArgs)
  }
} as ComponentMeta<typeof Avatar>

export const User: ComponentStory<typeof Avatar> = (args) => {
  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <Avatar {...args} />
    </div>
  )
}
