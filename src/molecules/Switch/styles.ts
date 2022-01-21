import styled from 'styled-components'

export const StyledWrapper = styled.div<{
  size: 'small' | 'medium' | undefined
}>`
  .MuiFormControlLabel-label {
    margin-top: ${(props) => (props.size === 'small' ? '0px' : '8px')};
  }
  .MuiSwitch-track {
    background-color: #6d7785;
  }
  .MuiSwitch-thumb {
    background-color: #6d7785;
    box-shadow: none;
  }
  .Mui-checked {
    .MuiSwitch-track {
      background-color: #126AEF;
    }
    .MuiSwitch-thumb {
      background-color: #126AEF;
    }
  }
`
