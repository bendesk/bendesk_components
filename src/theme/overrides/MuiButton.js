import { colorSet } from "../palette";

export default {
  contained: {
    // backgroundColor: '#FFFFFF',

  },
  root: {
    textTransform: 'initial',
    fontFamily: 'Inter',
    // color: palette.text.primary,
    borderRadius: '22px',
    fontSize: '15px',
    fontWeight: 400,
    letterSpacing: '0px',
    lineHeight: '24px'
  },
  textSizeSmall : {
    fontFamily: 'Inter',
    // color: palette.text.primary,
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: '0.15px',
    lineHeight: '20px'
  },
  sizeSmall : {
    fontFamily: 'Inter',
    // color: palette.text.primary,
    fontSize: '13px',
    fontWeight: 400,
    letterSpacing: '0px',
    lineHeight: '22px'
  },
  sizeMedium : {
    fontFamily: 'Inter',
    // color: palette.text.primary,
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: '0px',
    lineHeight: '24px'
  },
  sizeLarge : {
    fontFamily: 'Founders Grotesk',
    // color: palette.text.primary,
    fontSize: '20px',
    fontWeight: 400,
    letterSpacing: '0.4px',
    lineHeight: '23.5px'
  },
  textPrimary: {
    '&:hover': {
      backgroundColor: 'white',
      color: colorSet['blueDark']
    }
  }
};
