import { Avatar as MuiAvatar, AvatarProps } from '@material-ui/core'
import React, { FC } from 'react'

const sizes = { xl: '160px', l: '56px', m: '40px', s: '24px', xs: '18px' }

export type TAvatarArgs = AvatarProps & { size: keyof typeof sizes }

export const Avatar: FC<TAvatarArgs> = ({ size, ...props }) => {
  return (
    <MuiAvatar style={{ width: sizes[size], height: sizes[size] }} {...props} />
  )
}
