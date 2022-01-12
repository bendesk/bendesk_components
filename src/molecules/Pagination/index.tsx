import { Pagination as MuiPagination, PaginationProps } from '@material-ui/lab'
import React, { FC } from 'react'
import { useStyles } from './styles'

export type TPaginationArgs = {}

export const Pagination: FC<PaginationProps> = ({ ...props }) => {
  const classes = useStyles()
  return <MuiPagination color='primary' {...props} />
}
