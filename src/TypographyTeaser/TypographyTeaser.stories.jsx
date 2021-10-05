import { TextField } from '@material-ui/core'
import React from 'react'
import colors from '../Shared/colors'

import { TypographyTeaser } from '../TypographyTeaser'

export default {
  title: 'Bendesk/TypographyTeaser',
  component: TypographyTeaser
}

const Template = (args) => <TypographyTeaser {...args} />

export const BlueBackground = Template.bind({})
BlueBackground.args = {
  backgroundColor: colors.blue,
  textColor: ''
}

export const WhiteShadow = Template.bind({})
WhiteShadow.args = {
  backgroundColor: '',
  textColor: 'purple',
  buttonVariant: 'text'
}
const textField = <TextField InputProps={{style: {backgroundColor: 'white',}}} variant="outlined" placeholder="Email address" FormHelperTextProps={{style: {color: 'white', marginLeft: '0px'}}} helperText="Wir nutzen deine E-Mail-Adresse ausschließlich für unsere News." style={{ width: '100%'}} />;
export const withInput = Template.bind({})
withInput.args = {
  backgroundColor: colors.blue,
  textColor: '',
  content: textField
}

// export const withInput = Template.bind({})
// withInput.args = {
//   wInput: true
// }

// export const withSharing = Template.bind({})
// withSharing.args = {
//   wSharing: true
// }
