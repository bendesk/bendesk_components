import { SnackbarProps } from '@material-ui/core';
import React, { FC } from 'react';
export declare type TSnackbarArgs = SnackbarProps & {
    type: 'info' | 'success' | 'error';
    icon?: React.ReactNode;
};
export declare const Snackbar: FC<TSnackbarArgs>;
