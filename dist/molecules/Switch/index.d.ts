import { FC } from 'react';
import { FormControlProps } from '@material-ui/core';
export declare type TSwitchArgs = FormControlProps & {
    label: string;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
    value: boolean;
    onChange?: (value: any) => void;
    name: string;
};
export declare const Switch: FC<TSwitchArgs>;
