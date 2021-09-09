import { Button, Card, CardContent, Link, Typography } from '@material-ui/core'
import React from 'react'
import styles from './styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import colors from '../Shared/colors';
import { ThemeWrapper } from '../theme/ThemeWrapper';
import { colorSet } from '../theme/palette';
const useStyles = makeStyles(theme => ({
  root: {
    padding: '24px',
    borderRadius: '0px',
    [theme.breakpoints.down('sm')]: {
      padding: '16px'
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    // fontSize: 14
    marginBottom: '58px',
    marginLeft: '2px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '56px'
    }
  },
  pos: {
    marginBottom: 12
  },
  CardContent: {
    padding: '0px!important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // height: '130px'
  },
  arrowSize: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px'
    },
  }
}));

export const TypographyTeaser = ({ text, title, url, textColor, backgroundColor, buttonText, buttonVariant, buttonBackground, buttonTextColor, style }) => {
  const classes = useStyles();
  console.log(backgroundColor);
  return (
    <ThemeWrapper >

      <Card
        className={classes.root}
        raised
        style={{
          background: backgroundColor ? colorSet[backgroundColor] : 'white',
          boxShadow: backgroundColor
            ? 'none'
            : '0px 5px 10px -10px rgba(0, 0, 0, 0.03), 0px 9px 30px 2px rgba(0, 0, 0, 0.1)',
          ...style
        }}
      >
        <CardContent className={classes.CardContent}>
          <Typography
            className={classes.title}
            variant="h3"
            style={{
              color: backgroundColor ? 'white' : colorSet[textColor]
            }}
          >
            {title}
          </Typography>
          <div
            style={{
              marginLeft: '2px',
              color: 'white',
              display: 'inline-flex'
            }}
          >
            <Button size="medium" disableElevation variant={buttonVariant} endIcon={<ArrowForwardIcon className={classes.arrowSize} />} style={{ color: colors[textColor], padding: !backgroundColor && '0px', backgroundColor: buttonVariant !== 'text' && colors[buttonBackground], borderRadius: '20px' }}>
              {buttonText}
            </Button>
          </div>
        </CardContent>
      </Card>
    </ThemeWrapper>
  )
}

TypographyTeaser.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  flex: PropTypes.number,
  textColor: PropTypes.oneOf(['primary', 'success', 'warning', 'error', 'purple']),
  backgroundColor: PropTypes.oneOf(['blue', 'success', 'warning', 'error', 'purple']),
  buttonTextColor: PropTypes.oneOf(['blue', 'success', 'warning', 'error', 'purple']),
  buttonBackground: PropTypes.oneOf(['blue', 'success', 'warning', 'error', 'purple']),
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  buttonVariant: PropTypes.oneOf(['contained', 'text']),
  onClick: PropTypes.func,
};

TypographyTeaser.defaultProps = {
  title: 'This is a typography teaser',
  url: '',
  flex: 2,
  textColor: '',
  backgroundColor: '',
  buttonText: 'Continue',
  buttonTextColor: 'blue',
  buttonBackground: 'white',
  buttonLink: PropTypes.string.isRequired,
  buttonVariant: 'contained',
  onClick: f => f
};
