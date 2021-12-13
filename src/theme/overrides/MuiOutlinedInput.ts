export default {
  root: {
    height: '53px',
    '& input:valid ~ fieldset': {
      borderColor: '#28374C',
      borderWidth: 1
    },
    '& input:inactive ~ fieldset': {
      borderColor: '#28374C',
      borderWidth: 1
    },
    '& input:invalid ~ fieldset': {
      borderColor: '#FF6848',
      borderWidth: 1
    },

    '& textarea:valid + fieldset': {
      borderColor: '#28374C',
      borderWidth: 1
    },
    '& textarea:inactive + fieldset': {
      borderColor: '#28374C',
      borderWidth: 1
    },
    '& textarea:invalid + fieldset': {
      borderColor: '#FF6848',
      borderWidth: 1
    }
  }
}
