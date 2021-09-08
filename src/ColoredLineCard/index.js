import { Button, Card, CardContent, Link, Typography } from '@material-ui/core'
import React from 'react'
import styles from './styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import colors from '../Shared/colors';
import { ThemeWrapper } from '../theme/ThemeWrapper';
const useStyles = makeStyles(theme => ({
  root: {
    width: '400px',
    padding: '32px',
    borderRadius: '0px',
    height: 'auto',
    [theme.breakpoints.down('xs')]: {
      padding: '16px',
      paddingTop: '32px',
      paddingBottom: '32px',
      width: '264px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '16px',
      paddingTop: '32px',
      paddingBottom: '32px',
      width: '318px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '16px',
      paddingTop: '32px',
      paddingBottom: '32px',
      width: '282px'
    },
    [theme.breakpoints.down('lg')]: {
      padding: '16px',
      paddingTop: '32px',
      paddingBottom: '32px'
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: '24px'
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
  }
}))

export const ColoredLineCard = ({ type, description, title, url, color, buttonText, buttonVariant, style }) => {
  const classes = useStyles();
  return (
    <ThemeWrapper >
      <Card
        className={classes.root}
        raised
        style={{
          borderTop: `4px solid ${colors[color]}`,
          boxShadow: '0px 5px 10px -10px rgba(0, 0, 0, 0.03), 0px 9px 30px 2px rgba(0, 0, 0, 0.1)',
          ...style
        }}
      >
        <CardContent className={classes.CardContent} style={{ alignItems: description ? '' : 'center' }}>
          <Typography
            className={classes.title}
            variant="h3"
            style={{
              color: colors[color] || 'white',
              textAlign: description ? 'left' : 'center'
            }}
          >
            {title}
          </Typography>
          <Typography
            className={classes.title}
            variant="body1"
            color="textSecondary"
          >
            {description}
          </Typography>
          {type === 'withButton' && <div
            style={{
              marginLeft: '2px',
              color: !color ? colors[textColor] : 'white',
              display: 'inline-flex'
            }}
          >
            <Button size="medium" disableElevation variant={buttonVariant} color="primary">
              {buttonText}
            </Button>
          </div>}
        </CardContent>
      </Card>
    </ThemeWrapper>
  )
}

ColoredLineCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
  flex: PropTypes.number,
  type: PropTypes.oneOf(['standard', 'withButton']),
  color: PropTypes.oneOf(['white', 'primary', 'success', 'warning', 'error', 'purple']),
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  buttonVariant: PropTypes.oneOf(['contained', 'text']),
  onClick: PropTypes.func,
};

ColoredLineCard.defaultProps = {
  title: 'This is a typography teaser',
  description: '',
  url: '',
  flex: 2,
  type: 'standard',
  color: 'primary',
  buttonText: 'Button',
  buttonLink: PropTypes.string.isRequired,
  buttonVariant: 'contained',
  onClick: f => f
};
