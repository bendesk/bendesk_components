import MuiTypography from '@material-ui/core/Typography'
import React from 'react'
import PropTypes from 'prop-types'
import colors from '../../shared/colors'

export const Typography = ({ variant, children, color, ...props }) => {
  return (
    <MuiTypography
      key={variant}
      variant={variant}
      style={{ marginBottom: '24px', color: colors[color] }}
      {...props}
    >
      {children}
    </MuiTypography>
  )
}

Typography.propTypes = {
  color: PropTypes.oneOf([
    'textPrimary',
    'success',
    'warning',
    'error',
    'purple'
  ])
}

Typography.defaultProps = {
  color: 'textPrimary'
}
