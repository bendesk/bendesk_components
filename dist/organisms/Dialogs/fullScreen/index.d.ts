import { CSSProperties, FC, ReactNode } from 'react';
import { DialogProps } from '@material-ui/core';
export declare type TFullScreenDialogArgs = DialogProps & {
    showBack: boolean;
    open: boolean;
    title: string | ReactNode;
    handleBack: () => void;
    handleClose: () => void;
    style: CSSProperties;
    disableTransition: boolean;
};
export declare const FullScreenDialog: FC<TFullScreenDialogArgs>;
export default FullScreenDialog;
