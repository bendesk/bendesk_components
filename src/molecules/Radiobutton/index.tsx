import React, { FC } from 'react'
import { StyledWrapper } from './styles'
import {
  FormControl,
  FormControlProps,
  FormHelperText,
  Radio as MuiRadiobutton,
  FormLabel,
  FormControlLabel,
  RadioGroup
} from '@material-ui/core'
import { CheckedIcon, UncheckedIcon } from './icons'

export type TRadiobuttonArgs = FormControlProps & {
  label: string
  helperText?: string
  error?: boolean
  disabled?: boolean
  value: boolean | string
  onChange?: (value: any) => void
}

export type TRadiobuttonGroupArgs = TRadiobuttonArgs & {
  options: { value: string; label: string }[]
  horizontal: boolean
}

export const RadiobuttonGroup: FC<TRadiobuttonGroupArgs> = ({
  error = false,
  label,
  helperText,
  disabled = false,
  value,
  onChange,
  options,
  horizontal = false,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    !!onChange && onChange((event.target as HTMLInputElement).value)
  }

  return (
    <StyledWrapper>
      <FormControl error={error} disabled={disabled} {...props}>
        <FormLabel style={{ paddingBottom: '16px', fontWeight: 600 }}>
          {label}
        </FormLabel>
        <RadioGroup
          style={{ flexDirection: horizontal ? 'row' : 'column' }}
          value={value}
          onChange={handleChange}
        >
          {options.map((opt) => (
            <FormControlLabel
              key={opt.value}
              style={{ alignItems: 'start' }}
              value={opt.value}
              control={
                <MuiRadiobutton
                  icon={<UncheckedIcon disabled={disabled} />}
                  checkedIcon={<CheckedIcon disabled={disabled} />}
                />
              }
              label={opt.label}
            />
          ))}
        </RadioGroup>
        <FormHelperText style={{ paddingTop: '19px' }}>
          {helperText}
        </FormHelperText>
      </FormControl>
    </StyledWrapper>
  )
}

export const Radiobutton: FC<TRadiobuttonArgs> = ({
  error = false,
  label,
  helperText,
  disabled = false,
  value,
  onChange,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    !!onChange && onChange((event.target as HTMLInputElement).value)
  }

  return (
    <StyledWrapper>
      <MuiRadiobutton
        icon={<UncheckedIcon disabled={disabled} />}
        checkedIcon={<CheckedIcon disabled={disabled} />}
      />
    </StyledWrapper>
  )
}
