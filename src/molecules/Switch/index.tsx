import React, { FC } from 'react'
import { StyledWrapper } from './styles'
import {
  FormControl,
  FormControlProps,
  FormHelperText,
  Switch as MuiSwitch,
  FormGroup,
  FormControlLabel
} from '@material-ui/core'

export type TSwitchArgs = FormControlProps & {
  label: string
  helperText?: string
  error?: boolean
  disabled?: boolean
  value: boolean
  onChange?: (value: any) => void
  name: string
}

export const Switch: FC<TSwitchArgs> = ({
  error = false,
  label,
  helperText,
  disabled = false,
  value,
  onChange,
  name,
  size,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    !!onChange && onChange((event.target as HTMLInputElement).checked)
  }

  return (
    <StyledWrapper size={size}>
      <FormControl error={error} disabled={disabled} {...props}>
        <FormGroup>
          <FormControlLabel
            style={{ alignItems: 'start' }}
            control={
              <MuiSwitch
                checked={value}
                onChange={handleChange}
                name={name}
                size={size}
              />
            }
            label={label}
          />
        </FormGroup>
        <FormHelperText style={{ paddingTop: '19px' }}>
          {helperText}
        </FormHelperText>
      </FormControl>
    </StyledWrapper>
  )
}
