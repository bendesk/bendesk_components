import React from 'react'
import { SvgIcon } from '@material-ui/core'

export default ({ color, ...props }) => (
  <SvgIcon
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.5355 7.75624L16.2426 8.46334L12.7071 11.9989L16.2426 15.5344L15.5355 16.2415L12 12.706L8.46447 16.2415L7.75736 15.5344L11.2929 11.9989L7.75736 8.46334L8.46447 7.75624L12 11.2918L15.5355 7.75624Z'
      fill={color}
    />
  </SvgIcon>
)
