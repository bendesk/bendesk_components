import styled from 'styled-components'

export const StyledWrapper = styled.div<{
  size: 'small' | 'medium' | undefined
}>`
  .MuiFormControlLabel-label {
    margin-top: ${(props) => (props.size === 'small' ? '0px' : '8px')};
  }
`
