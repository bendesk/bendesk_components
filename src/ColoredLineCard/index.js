import { Button, Card, CardContent, Link, Typography } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import colors from '../Shared/colors';
import { ThemeWrapper } from '../theme/ThemeWrapper';
const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '390px',
    maxWidth: '390px',
    borderRadius: '0px',
    height: 'auto',
    padding: '16px',
    paddingTop: '0px',
    [theme.breakpoints.only('xs')]: {
      maxWidth: '264px',
      minWidth: '264px'
    },
    [theme.breakpoints.only('sm')]: {
      maxWidth: '318px',
      minWidth: '318px'
    },
    [theme.breakpoints.only('md')]: {
      maxWidth: '282px',
      minWidth: '282px'
    },
    [theme.breakpoints.only('lg')]: {
      maxWidth: '280px',
      minWidth: '280px'
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: '24px'
  },
  button: {
    marginLeft: '2px',
    display: 'inline-flex',
    marginTop: '32px',
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

export const ColoredLineCard = ({ type, description, title, url, color, buttonText, buttonVariant, style, className }) => {
  const classes = useStyles();
  return (
    <ThemeWrapper >
      <Card
        className={[classes.root, className].join(' ')}
        raised
        style={{
          borderTop: `4px solid ${colors[color]}`,
          boxShadow: '0px 5px 10px -10px rgba(0, 0, 0, 0.03), 0px 9px 30px 2px rgba(0, 0, 0, 0.1)',
          ...style
        }}
      >
        <CardContent className={classes.CardContent} style={{ alignItems: description ? '' : 'center' }}>
          <Typography
            variant="h3"
            style={{
              color: colors[color] || 'white',
              textAlign: description ? 'left' : 'center',
              marginTop: '32px'
            }}
          >
            {title}
          </Typography>
          {description && <Typography
            color="textSecondary"
            style={{ marginTop: '8px', color: colors[color] || 'white', }}
          >
            {description}
          </Typography>}
          {type === 'withButton' &&
            <div className={classes.button} style={{ color: !color ? colors[textColor] : 'white' }}>
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
  color: PropTypes.oneOf(['white', 'success', 'warning', 'error', 'purple']),
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  buttonVariant: PropTypes.oneOf(['contained', 'text']),
  onClick: PropTypes.func
};

ColoredLineCard.defaultProps = {
  title: 'This is a typography teaser',
  description: '',
  url: '',
  flex: 2,
  type: 'standard',
  color: 'warning',
  buttonText: 'Button',
  buttonLink: PropTypes.string.isRequired,
  buttonVariant: 'contained',
  onClick: f => f
};
