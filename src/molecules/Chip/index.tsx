import MuiChip from '@material-ui/core/Chip'
import { ChipProps } from '@material-ui/core'
import React, { FC } from 'react'
import DeleteLine from '../../static/icons/bendesk/DeleteLine'
import colors from '../../shared/colors'

export type TChipArgs = ChipProps & {
  backgroundColor?: string
  textColor?: string
}

export const Chip: FC<TChipArgs> = ({
  backgroundColor,
  textColor,
  deleteIcon,
  ...props
}) => {
  return (
    <MuiChip
      {...props}
      style={{ backgroundColor, color: textColor }}
      deleteIcon={
        deleteIcon || (
          <DeleteLine
            color={props.variant === 'outlined' ? colors['blue'] : '#fff'}
          />
        )
      }
    />
  )
}
