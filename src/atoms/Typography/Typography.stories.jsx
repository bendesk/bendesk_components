import React from 'react'

import { Typography } from '../Typography'

export default {
  title: 'Atoms/Typography',
  component: Typography
}
const headingVariants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'subtitle1',
  'subtitle2',
  'body1',
  'h6',
  'body2',
  'overline',
  'caption'
]
const variantName = (name) => {
  return name !== 'h6' && name !== 'overline'
    ? name
    : name === 'h6'
    ? 'body1-mono'
    : name === 'overline'
    ? 'body2-mono'
    : ''
}
const Template = (args) => (
  <>
    {headingVariants.map((variant) => (
      <Typography key={variant} variant={variant} {...args}>
        Typography with {variantName(variant)} variant
      </Typography>
    ))}
  </>
)

export const All = Template.bind({})
