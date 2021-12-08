import { colors } from '@material-ui/core'

const white = '#FFFFFF'
const black = '#28374C'
export const colorSet = {
  blue: '#126AEF',
  blueDark: '#0E53BA',
  black: '#28374D',
  red: '#FF6848',
  purple: '#8A85FF',
  green: '#6CC83D',
  yellow: '#FFAE11',
  borderGrey: '#0000003b',
  secondary: '#6D7785',
  grey: '#DADADA',
  grey100: '#F0F0F0',
  grey600: '#7E8794',
  grey400: '#A9AFB7',
  grey300: '#BFC3C9',
  grey50: '#F4F5F6',
  grey900: '#3E4B5E'
}

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colorSet.blueDark,
    main: '#126AEF',
    light: colors.cyan[100]
  },
  secondary: {
    contrastText: white,
    dark: colorSet.blueDark,
    main: '#126AEF',
    light: colors.red[100]
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: '#28374C',
    secondary: '#6D7785',
    link: colors.blue[600]
  },
  background: {
    default: '#ffffff',
    paper: white
  },

  icon: colors.blueGrey[600],
  divider: colors.grey[200],
  orange: colors.orange[900],
  green: colors.green[900]
}
