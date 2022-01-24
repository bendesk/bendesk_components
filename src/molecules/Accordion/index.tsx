import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from '@material-ui/core'
import React, { FC } from 'react'
import { Typography } from '../..'
import ArrowDownOutlined from '../../static/icons/bendesk/ArrowDownOutlined'
import palette from '../../theme/palette'
import { StyledWrapper } from './styles'

export type TAccordionContent = {
  title: string
  subtitle?: string
  content: React.FC | string
  defaultExpanded?: boolean
}

export type TAccordionArgs = {
  content: TAccordionContent[] | TAccordionContent
}

export const Accordion: FC<TAccordionArgs> = ({ content, ...props }) => {
  const accordions = Array.isArray(content) ? content : [content]
  return (
    // <StylesProvider injectFirst>
      <StyledWrapper>
        {accordions.map((acc, index) => (
          <MuiAccordion
            key={index}
            defaultExpanded={acc.defaultExpanded}
            {...props}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDownOutlined style={{ height: '35px', width: '35px' }} />
              }
            >
              <Grid container justifyContent='flex-start' alignItems='center'>
                <Typography style={{ width: '100%' }} variant='h5'>
                  {acc.title}
                </Typography>
                <Typography
                  hidden={!acc.subtitle}
                  style={{ width: '100%', color: palette.text.secondary }}
                  variant='body1'
                >
                  {acc.subtitle}
                </Typography>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              {typeof acc.content === 'string' ? (
                <Typography variant='body1' style={{ marginBottom: 0 }}>
                  {acc.content}
                </Typography>
              ) : (
                <acc.content />
              )}
            </AccordionDetails>
          </MuiAccordion>
        ))}
      </StyledWrapper>
    // </StylesProvider>
  )
}
