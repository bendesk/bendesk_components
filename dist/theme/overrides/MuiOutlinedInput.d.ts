declare const _default: {
    root: {
        '& input:valid ~ fieldset': {
            borderColor: string;
            borderWidth: number;
        };
        '& input:inactive ~ fieldset': {
            borderColor: string;
            borderWidth: number;
        };
        '& input:invalid ~ fieldset': {
            borderColor: string;
            borderWidth: number;
        };
        '& textarea:valid + fieldset': {
            borderColor: string;
            borderWidth: number;
        };
        '& textarea:inactive + fieldset': {
            borderColor: string;
            borderWidth: number;
        };
        '& textarea:invalid + fieldset': {
            borderColor: string;
            borderWidth: number;
        };
    };
    input: {
        padding: string;
    };
};
export default _default;
