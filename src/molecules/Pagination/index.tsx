import { Pagination as MuiPagination, PaginationProps } from '@material-ui/lab'
import React, { FC } from 'react'

export type TPaginationArgs = {}

export const Pagination: FC<PaginationProps> = ({ ...props }) => {
  return <MuiPagination color='primary' {...props} />
}
