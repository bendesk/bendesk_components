import { AvatarProps } from '@material-ui/core';
import { FC } from 'react';
declare const sizes: {
    xl: string;
    l: string;
    m: string;
    s: string;
    xs: string;
};
export declare type TAvatarArgs = AvatarProps & {
    size: keyof typeof sizes;
};
export declare const Avatar: FC<TAvatarArgs>;
export {};
