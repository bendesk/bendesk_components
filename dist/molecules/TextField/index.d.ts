import { FC } from 'react';
import { TextFieldProps } from '@material-ui/core';
export declare type TTextFieldArgs = TextFieldProps & {
    prefix?: JSX.Element | string;
    suffix?: JSX.Element | string;
    helperText?: string;
    error?: boolean;
};
export declare const TextField: FC<TTextFieldArgs>;
