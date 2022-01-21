import styled from 'styled-components'

export const StyledWrapper = styled.div`
  .MuiPaper-root {
    margin: 0;
  }
  .MuiAccordion-root {
    margin: 0;
    border-bottom: 1px solid #dadada;
    border-radius: 0;
    :before {
      opacity: 0;
    }
  }
  .MuiGrid-container {
    margin-bottom: 0;
  }
  .MuiIconButton-label {
    height: 35px;
    width: 35px;
  }
  .MuiAccordionDetails-root {
    padding-top: 0;
  }
  .MuiAccordionSummary-root {
    padding: 24px;
    min-height: unset !important;
  }
  .MuiAccordionDetails-root {
    padding: 24px;
    padding-top: 0;
  }
  .MuiAccordionSummary-expandIcon {
    padding: 0;
  }
  .MuiAccordionSummary-content {
    margin: 0 !important;
  }
  .MuiAccordion-root.Mui-expanded {
    margin: 0;
    :before {
      opacity: 0;
    }
  }
  .MuiIconButton-edgeEnd {
    margin-right: 0;
  }
`
