import React from 'react';
import { Card, Link, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

var styles = {"test":"_3ybTi"};

var useStyles = makeStyles(function (theme) {
  var _root, _title, _arrowSize;

  return {
    root: (_root = {
      padding: '24px'
    }, _root[theme.breakpoints.down('sm')] = {
      padding: '16px'
    }, _root),
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: (_title = {
      marginBottom: '58px',
      marginLeft: '2px'
    }, _title[theme.breakpoints.down('sm')] = {
      marginBottom: '56px'
    }, _title),
    pos: {
      marginBottom: 12
    },
    CardContent: {
      padding: '0px!important',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '130px'
    },
    arrowSize: (_arrowSize = {}, _arrowSize[theme.breakpoints.down('sm')] = {
      fontSize: '22px'
    }, _arrowSize)
  };
});
var TypographyTeaser = function TypographyTeaser(_ref) {
  var title = _ref.title,
      url = _ref.url,
      textColor = _ref.textColor,
      backgroundColor = _ref.backgroundColor,
      buttonText = _ref.buttonText;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement(Card, {
    className: classes.root,
    raised: true,
    style: {
      background: backgroundColor,
      boxShadow: backgroundColor ? 'none' : '0px 5px 10px -10px rgba(0, 0, 0, 0.03), 0px 9px 30px 2px rgba(0, 0, 0, 0.1)'
    }
  }, /*#__PURE__*/React.createElement(Link, {
    to: url
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: classes.CardContent
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.title,
    variant: "h3",
    style: {
      color: textColor,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: '2px',
      color: textColor,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h5"
  }, buttonText, "--")))));
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { ExampleComponent, TypographyTeaser };
//# sourceMappingURL=index.modern.js.map
