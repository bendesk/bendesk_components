import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative'
  },
  title: {
    flex: 1
  },
  toolBar: {
    [theme.breakpoints.only('xs')]: {
      marginTop: theme.spacing(2)
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginTop: theme.spacing(3)
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(4)
    }
  },
  toolbarSpacing: {
    paddingLeft: '32px',
    paddingRight: '32px'
    // [theme.breakpoints.only('xs')]: {
    //   paddingRight: '16px',
    //   paddingLeft: '16px',
    //   minHeight: 'auto'
    // },
    // [theme.breakpoints.between('sm', 'md')]: {
    //   paddingRight: '24px',
    //   paddingLeft: '24px',
    //   minHeight: 'auto'
    // },
    // [theme.breakpoints.only('lg')]: {
    //   paddingRight: '32px',
    //   paddingLeft: '32px'
    // }
  },
  dialogContentSpacing: {
    paddingLeft: '32px',
    paddingRight: '32px',
    marginTop: '80px'
    // [theme.breakpoints.only('xs')]: {
    //   paddingRight: '16px',
    //   paddingLeft: '16px',
    //   minHeight: 'auto'
    // },
    // [theme.breakpoints.between('sm', 'md')]: {
    //   paddingRight: '24px',
    //   paddingLeft: '24px',
    //   minHeight: 'auto'
    // },
    // [theme.breakpoints.only('lg')]: {
    //   paddingRight: '32px',
    //   paddingLeft: '32px'
    // }
  },
  toolbarContainer: {
    marginTop: '24px',
    display: 'inline-flex',
    height: '48px',
    alignItems: 'center'
  }
}))
