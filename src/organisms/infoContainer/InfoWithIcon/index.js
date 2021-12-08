import Typography from '@material-ui/core/Typography'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { ThemeWrapper } from '../../../theme/ThemeWrapper'
import SpaOutlinedIcon from '@material-ui/icons/SpaOutlined'
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '0px'
    // padding: '16px',
    // [theme.breakpoints.up('md')]: {
    //   padding: '24px'
    // },
    // width: '50%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  content: {
    fontWeight: 400,
    fontSize: '19px',
    lineHeight: '24.7px',
    fontFamily: 'Founders Grotesk'
  },
  button: {
    marginLeft: '2px',
    display: 'inline-flex',
    marginTop: '24px',
    color: 'white',
    [theme.breakpoints.up('md')]: {
      marginTop: '40px'
    },
    '&:hover': {
      '&:$arrowSize': {
        marginLeft: '12px'
      }
    }
  },
  pos: {
    marginBottom: 12
  },
  CardContent: {
    padding: '0px!important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
    // height: '130px'
  },
  arrowSize: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px'
    }
  },
  hoverBtn: {
    display: 'inline-flex',
    '&:hover': {
      // color: '#0E53BA',
      gap: '4px'
    }
  },
  children: {
    marginTop: '24px',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
    // marginBottom: '24px'
  }
}))

export const InfoWithIcon = ({
  title,
  style,
  className,
  description,
  headerIcon
}) => {
  const classes = useStyles()
  const Icon = <SpaOutlinedIcon style={{ fontSize: '4.5rem' }} />
  return (
    <ThemeWrapper>
      <div
        className={[classes.root, className].join(' ')}
        style={{
          ...style
        }}
      >
        <div className={classes.CardContent}>
          <div style={{ marginBottom: '24px' }}>{headerIcon}</div>
          <Typography variant='h3' style={{ marginBottom: '24px' }}>
            {title}
          </Typography>
          <p className={classes.content} variant='h3'>
            {description}
          </p>
        </div>
      </div>
    </ThemeWrapper>
  )
}

InfoWithIcon.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

InfoWithIcon.defaultProps = {
  title: 'This is a typography teaser',
  description: ''
}
