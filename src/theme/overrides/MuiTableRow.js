import { colorSet } from '../palette'

export default {
  root: {
    // '&$selected': {
    //   backgroundColor: palette.background.default
    // },
    '&$hover': {
      '&:hover': {
        backgroundColor: colorSet['grey50']
      }
    }
  }
}
