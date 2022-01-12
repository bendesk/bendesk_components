import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Pagination } from '.'
import generateDisabledArgsConfig from '../../helpers/generateDisabledArgsConfig'

const disabledArgs = []

export default {
  title: 'Molucules/Pagination',
  component: Pagination,
  args: { size : 'medium' },
  argTypes: {
    ...generateDisabledArgsConfig(disabledArgs)
  }
} as ComponentMeta<typeof Pagination>

export const Main: ComponentStory<typeof Pagination> = (args) => {
  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <Pagination count={10} {...args} />
    </div>
  )
}
