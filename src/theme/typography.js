import { createMuiTheme } from '@material-ui/core';
import palette from './palette';
const theme = createMuiTheme();
export default {
  fontFamily: ['Inter'].join(','),
  h1: {
    color: palette.text.primary,
    fontFamily: 'Founders Grotesk',
    fontWeight: 600,
    fontSize: '64px',
    letterSpacing: '0px',
    lineHeight: '70.4px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '44px',
      fontWeight: 600,
      letterSpacing: '0px',
      lineHeight: '52px'
    }
  },
  h2: {
    color: palette.text.primary,
    fontFamily: 'Founders Grotesk',
    fontWeight: 600,
    fontSize: '42px',
    letterSpacing: '0px',
    lineHeight: '49px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
      fontWeight: 600,
      letterSpacing: '0px',
      lineHeight: '38px'
    }
  },
  h3: {
    color: palette.text.primary,
    fontFamily: 'Founders Grotesk',
    fontWeight: 600,
    fontSize: '32px',
    letterSpacing: '0px',
    lineHeight: '38px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      fontWeight: 600,
      letterSpacing: '0px',
      lineHeight: '28px'
    }
  },
  h4: {
    color: palette.text.primary,
    fontFamily: 'Founders Grotesk',
    fontWeight: 400,
    fontSize: '32px',
    letterSpacing: '0px',
    lineHeight: '38px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      fontWeight: 400,
      letterSpacing: '0px',
      lineHeight: '28px'
    }
  },
  h5: {
    // color: palette.text.primary,
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '18px',
    letterSpacing: '0px',
    lineHeight: '22px'
  },

  body0: {
    // color: palette.text.primary,
    fontFamily: 'Founders Grotesk',
    fontWeight: 400,
    fontSize: '20px',
    letterSpacing: '0.15px',
    lineHeight: '25px'
  },
  subtitle1: {
    fontFamily: 'Inter',
    color: palette.text.primary,
    fontWeight: 600,
    fontSize: '16px',
    letterSpacing: '0.15px',
    lineHeight: '24px'
  },
  subtitle2: {
    fontFamily: 'Inter',
    color: palette.text.secondary,
    fontWeight: 600,
    fontSize: '13px',
    letterSpacing: '0.15px',
    lineHeight: '20px'
  },
  body1: {
    // color: palette.text.primary,
    fontWeight: 400,
    fontFamily: 'Inter',
    fontSize: '16px',
    letterSpacing: '0.15px',
    lineHeight: '24px'
  },
  'body1-mono': {
    // color: palette.text.primary,
    fontFamily: 'Inter, monospace',
    fontSize: '16px',
    letterSpacing: '0.15px',
    lineHeight: '24px'
  },
  //body1-mono alternate
  h6: {
    // color: palette.text.primary,
    fontFamily: 'Inter, monospace',
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '0.3px',
    lineHeight: '20px'
  },
  body2: {
    // color: palette.text.secondary,
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: '0.15px',
    lineHeight: '20px'
  },
  'body2-mono': {
    // color: palette.text.primary,
    fontFamily: 'Inter, monospace',
    fontSize: '14px',
    letterSpacing: '0.3px',
    lineHeight: '20px'
  },
  caption: {
    fontFamily: 'Inter',
    color: palette.text.secondary,
    fontWeight: 400,
    fontSize: '12px',
    letterSpacing: '0.4px',
    lineHeight: '20px'
  },
  //body2-mono alternate
  overline: {
    fontFamily: 'Inter, monospace',
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '0.3px',
    lineHeight: '21px'
    // textTransform: 'uppercase'
  }
};
