import { FC } from 'react';
import { FormControlProps } from '@material-ui/core';
export declare type TRadiobuttonArgs = FormControlProps & {
    label: string;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
    value: boolean | string;
    onChange?: (value: any) => void;
};
export declare type TRadiobuttonGroupArgs = TRadiobuttonArgs & {
    options: {
        value: string;
        label: string;
    }[];
    horizontal: boolean;
};
export declare const RadiobuttonGroup: FC<TRadiobuttonGroupArgs>;
