import React, { FC } from 'react';
export declare type TAccordionContent = {
    title: string;
    subtitle?: string;
    content: React.FC | string;
    defaultExpanded?: boolean;
};
export declare type TAccordionArgs = {
    content: TAccordionContent[] | TAccordionContent;
};
export declare const Accordion: FC<TAccordionArgs>;
