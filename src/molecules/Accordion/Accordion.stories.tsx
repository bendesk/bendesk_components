import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Accordion, TAccordionContent } from '.'
import generateDisabledArgsConfig from '../../helpers/generateDisabledArgsConfig'
import Typography from '@material-ui/core/Typography'

const disabledArgs = []

export default {
  title: 'Molucules/Accordion',
  component: Accordion,
  args: {},
  argTypes: {
    ...generateDisabledArgsConfig(disabledArgs)
  }
} as ComponentMeta<typeof Accordion>

const content: TAccordionContent[] = [
  {
    title: 'Accordion 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  },
  {
    title: 'Accordion 2',
    subtitle: 'Accordion 2 sub',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  },
  {
    title: 'Accordion 3',
    subtitle: 'Accordion 3 sub',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  },
  {
    title: 'Accordion 4',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  },
  {
    title: 'Accordion 5',
    content: () => (
      <Typography variant='h5'>
        Typography component variant H5 as accordion content: <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    )
  }
]

export const Main: ComponentStory<typeof Accordion> = (args) => {
  return (
    <div style={{ padding: '20px', width: '90%' }}>
      <Accordion content={content} />
    </div>
  )
}
