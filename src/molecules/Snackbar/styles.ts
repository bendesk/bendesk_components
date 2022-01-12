import { makeStyles } from '@material-ui/core/styles'
import colors from '../../shared/colors'

export const useStyles = makeStyles(() => ({
  filledError: { fontSize: '14px', fontWeight: 400 },
  filledSuccess: {
    backgroundColor: colors.success,
    fontSize: '14px',
    fontWeight: 400
  },
  filledInfo: { backgroundColor: '#28374C', fontSize: '14px', fontWeight: 400 }
}))
