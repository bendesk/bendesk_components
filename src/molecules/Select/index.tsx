import React, { FC } from 'react'
import MuiSelect from '@material-ui/core/Select'
import {
  FormControl,
  FormControlProps,
  FormHelperText,
  InputLabel,
  SelectProps
} from '@material-ui/core'
import { Chip } from '../Chip'
import { DownArrowIcon } from './icons'
import { StyledWrapper } from './styles'

export type TSelectArgs = FormControlProps & {
  label: string
  helperText?: string
  error?: boolean
  disabled?: boolean
  multiple: boolean
  value: SelectProps['value']
  onChange?: (e: React.ChangeEvent<any>) => void
  children?: SelectProps['children']
}

const ITEM_HEIGHT = 36
const MenuProps: SelectProps['MenuProps'] = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 7,
      width: 'inherit'
    }
  },
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center'
  },
  getContentAnchorEl: null
}

export const Select: FC<TSelectArgs> = ({
  variant = 'outlined',
  fullWidth = true,
  error = false,
  label,
  helperText,
  disabled = false,
  multiple = false,
  value,
  onChange,
  children,
  ...props
}) => {
  return (
    <StyledWrapper hasChip={multiple && !!(value as Array<String>).length}>
      <FormControl
        variant={variant}
        fullWidth={fullWidth}
        error={error}
        disabled={disabled}
        {...props}
      >
        <InputLabel>{label}</InputLabel>
        <MuiSelect
          variant={variant}
          label={label}
          value={value}
          onChange={onChange}
          IconComponent={DownArrowIcon}
          MenuProps={MenuProps}
          multiple={multiple}
          renderValue={(selected: any) =>
            multiple
              ? (selected as string[]).map(
                  (value) =>
                    !!value && (
                      <Chip
                        key={value}
                        label={value}
                        variant='outlined'
                        onDelete={() => console.log('deleted')}
                        style={{ marginRight: '8px' }}
                      />
                    )
                )
              : selected
          }
        >
          {children}
        </MuiSelect>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </StyledWrapper>
  )
}
