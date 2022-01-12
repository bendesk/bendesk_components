declare namespace _default {
    export const title: string;
    export { TypographyTeaser as component };
}
export default _default;
export function BlueBackground(args: any): JSX.Element;
export namespace BlueBackground {
    export namespace args {
        export const backgroundColor: string;
        export const textColor: string;
    }
}
export function WhiteShadow(args: any): JSX.Element;
export namespace WhiteShadow {
    export namespace args_1 {
        const backgroundColor_1: string;
        export { backgroundColor_1 as backgroundColor };
        const textColor_1: string;
        export { textColor_1 as textColor };
        export const buttonVariant: string;
    }
    export { args_1 as args };
}
export function withInput(args: any): JSX.Element;
export namespace withInput {
    export namespace args_2 {
        const backgroundColor_2: string;
        export { backgroundColor_2 as backgroundColor };
        const textColor_2: string;
        export { textColor_2 as textColor };
        export { textField as content };
    }
    export { args_2 as args };
}
import { TypographyTeaser } from ".";
declare const textField: JSX.Element;
