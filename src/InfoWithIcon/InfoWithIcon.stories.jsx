import React from 'react'

import { InfoWithIcon } from '../InfoWithIcon'

export default {
  title: 'Bendesk/InfoWithIcon',
  component: InfoWithIcon
}

const Template = (args) => <InfoWithIcon {...args} />

export const Standard = Template.bind({})
Standard.args = {
  title: 'Headline',
  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. '
}
