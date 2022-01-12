import React, { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const DownArrowIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon
    width='24'
    height='25'
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M7.41 9.40137L12 13.9814L16.59 9.40137L18 10.8114L12 16.8114L6 10.8114L7.41 9.40137Z'
      fill='#126AEF'
    />
  </SvgIcon>
)
