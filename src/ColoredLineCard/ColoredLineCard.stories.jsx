import React from 'react'

import { ColoredLineCard } from '../ColoredLineCard'

export default {
  title: 'Bendesk/ColoredLineCard',
  component: ColoredLineCard,
}

const Template = (args) => <ColoredLineCard {...args} />

export const Standard = Template.bind({})
Standard.args = {}

// export const withInput = Template.bind({})
// withInput.args = {
//   wInput: true
// }

// export const withSharing = Template.bind({})
// withSharing.args = {
//   wSharing: true
// }
