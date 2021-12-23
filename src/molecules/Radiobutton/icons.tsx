import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const UncheckedIcon = (props: SvgIconProps & { disabled: boolean }) => (
  <SvgIcon
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12Z'
      fill='white'
      stroke={props.disabled ? '#DADADA' : '#6D7785'}
    />
  </SvgIcon>
)

export const CheckedIcon = (props: SvgIconProps & { disabled: boolean }) => (
  <SvgIcon
    width='24'
    height='25'
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M1 12.8118C1 6.73664 5.92487 1.81177 12 1.81177C18.0751 1.81177 23 6.73664 23 12.8118C23 18.8869 18.0751 23.8118 12 23.8118C5.92487 23.8118 1 18.8869 1 12.8118Z'
      fill='white'
      stroke={props.disabled ? '#DADADA' : '#6CC83D'}
      strokeWidth='2'
    />
    <path
      d='M7 12.8118C7 10.0503 9.23858 7.81177 12 7.81177C14.7614 7.81177 17 10.0503 17 12.8118C17 15.5732 14.7614 17.8118 12 17.8118C9.23858 17.8118 7 15.5732 7 12.8118Z'
      fill={props.disabled ? '#DADADA' : '#28374C'}
    />
  </SvgIcon>
)
