export function ColoredLineCard({ type, description, title, url, color, buttonText, buttonVariant, style, textColor, className }: {
    type: any;
    description: any;
    title: any;
    url: any;
    color: any;
    buttonText: any;
    buttonVariant: any;
    style: any;
    textColor: any;
    className: any;
}): JSX.Element;
export namespace ColoredLineCard {
    export const propTypes: {
        title: PropTypes.Validator<string>;
        description: PropTypes.Requireable<string>;
        url: PropTypes.Requireable<string>;
        flex: PropTypes.Requireable<number>;
        type: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        buttonText: PropTypes.Validator<string>;
        buttonLink: PropTypes.Validator<string>;
        buttonVariant: PropTypes.Requireable<string>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    export const defaultProps: {
        title: string;
        description: string;
        url: string;
        flex: number;
        type: string;
        color: string;
        buttonText: string;
        buttonLink: PropTypes.Validator<string>;
        buttonVariant: string;
        onClick: (f: any) => any;
    };
}
import PropTypes from "prop-types";
