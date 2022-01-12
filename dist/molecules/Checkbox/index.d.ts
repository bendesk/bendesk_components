import { FC } from 'react';
import { FormControlProps } from '@material-ui/core';
export declare type TCheckboxArgs = FormControlProps & {
    label: string;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
    values: boolean;
    onChange?: (values: TCheckboxArgs['values']) => void;
};
export declare type TCheckboxGroupArgs = FormControlProps & {
    label: string;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
    values: {
        [key: string]: boolean;
    };
    onChange?: (values: TCheckboxGroupArgs['values']) => void;
    options: {
        value: string;
        label: string;
        defaultState: boolean;
    }[];
    horizontal: boolean;
};
export declare const CheckboxGroup: FC<TCheckboxGroupArgs>;
