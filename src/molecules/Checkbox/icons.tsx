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
      d='M0.5 4C0.5 2.067 2.067 0.5 4 0.5H20C21.933 0.5 23.5 2.067 23.5 4V20C23.5 21.933 21.933 23.5 20 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z'
      fill='white'
      stroke={props.disabled ? '#DADADA' : '#6D7785'}
    />
  </SvgIcon>
)

export const CheckedIcon = (props: SvgIconProps & { disabled: boolean }) => (
  <SvgIcon
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4Z'
      fill='white'
      stroke={props.disabled ? '#DADADA' : '#6CC83D'}
      strokeWidth='2'
    />
    <path
      d='M7 11.8132L10.4851 15.2734L16.794 8.98935L15.8097 8L10.4851 13.3047L7.96946 10.8239L7 11.8132Z'
      fill={props.disabled ? '#DADADA' : '#28374C'}
    />
  </SvgIcon>
)
