import React from 'react'

import { TypographyTeaser } from '../TypographyTeaser'

export default {
  title: 'Bendesk/TypographyTeaser',
  component: TypographyTeaser,
}

const Template = (args) => <TypographyTeaser {...args} />

export const Standard = Template.bind({})
Standard.args = {}

export const withInput = Template.bind({})
withInput.args = {
  wInput: true
}

export const withSharing = Template.bind({})
withSharing.args = {
  wSharing: true
}
