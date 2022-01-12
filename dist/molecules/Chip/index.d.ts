import { ChipProps } from '@material-ui/core';
import { FC } from 'react';
export declare type TChipArgs = ChipProps & {
    backgroundColor?: string;
    textColor?: string;
};
export declare const Chip: FC<TChipArgs>;
