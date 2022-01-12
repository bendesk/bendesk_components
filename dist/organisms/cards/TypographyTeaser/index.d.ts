export function TypographyTeaser({ text, title, url, textColor, backgroundColor, buttonText, buttonVariant, buttonBackground, buttonTextColor, style, className, content }: {
    text: any;
    title: any;
    url: any;
    textColor: any;
    backgroundColor: any;
    buttonText: any;
    buttonVariant: any;
    buttonBackground: any;
    buttonTextColor: any;
    style: any;
    className: any;
    content: any;
}): JSX.Element;
export namespace TypographyTeaser {
    export namespace propTypes {
        export const title: PropTypes.Requireable<string>;
        export const url: PropTypes.Requireable<string>;
        export const flex: PropTypes.Requireable<number>;
        export const textColor: PropTypes.Requireable<string>;
        export const buttonText: PropTypes.Validator<string>;
        export const buttonLink: PropTypes.Validator<string>;
        export const buttonVariant: PropTypes.Requireable<string>;
        export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
    export namespace defaultProps {
        const title_1: string;
        export { title_1 as title };
        const url_1: string;
        export { url_1 as url };
        const flex_1: number;
        export { flex_1 as flex };
        const textColor_1: string;
        export { textColor_1 as textColor };
        const buttonText_1: string;
        export { buttonText_1 as buttonText };
        const buttonLink_1: PropTypes.Validator<string>;
        export { buttonLink_1 as buttonLink };
        const buttonVariant_1: string;
        export { buttonVariant_1 as buttonVariant };
        export function onClick_1(f: any): any;
        export { onClick_1 as onClick };
    }
}
import PropTypes from "prop-types";
