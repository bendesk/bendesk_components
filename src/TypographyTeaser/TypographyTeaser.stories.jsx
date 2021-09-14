import React from 'react'

import { TypographyTeaser } from '../TypographyTeaser'

export default {
  title: 'Bendesk/TypographyTeaser',
  component: TypographyTeaser,
}

const Template = (args) => <TypographyTeaser {...args} />

export const BlueBackground = Template.bind({})
BlueBackground.args = {
  backgroundColor: 'blue',
  textColor: ''
}

export const WhiteShadow = Template.bind({})
WhiteShadow.args = {
  backgroundColor: '',
  textColor: 'purple',
  buttonVariant: 'text'
}

// export const withInput = Template.bind({})
// withInput.args = {
//   wInput: true
// }

// export const withSharing = Template.bind({})
// withSharing.args = {
//   wSharing: true
// }
