import styled from 'styled-components'

export const StyledWrapper = styled.div<{ hasChip: Boolean }>`
  .MuiOutlinedInput-input {
    padding: ${(props) => (props.hasChip ? '10.5px 12px' : '17px 12px')};
  }
`
