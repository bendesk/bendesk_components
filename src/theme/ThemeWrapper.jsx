import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './'
import '../_fonts/founders_grotesk/founders-grotesk.css'
import '../_fonts/inter/inter.css'

export const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
