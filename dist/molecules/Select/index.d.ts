import React, { FC } from 'react';
import { FormControlProps, SelectProps } from '@material-ui/core';
export declare type TSelectArgs = FormControlProps & {
    label: string;
    name: string;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
    multiple: boolean;
    value: SelectProps['value'];
    onChange?: (e: React.ChangeEvent<any>) => void;
    children?: SelectProps['children'];
};
export declare const Select: FC<TSelectArgs>;
