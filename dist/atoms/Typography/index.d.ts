export function Typography({ variant, children, color, ...props }: {
    [x: string]: any;
    variant: any;
    children: any;
    color?: string | undefined;
}): JSX.Element;
export namespace Typography {
    export namespace propTypes {
        export const color: PropTypes.Requireable<string>;
    }
    export namespace defaultProps {
        const color_1: string;
        export { color_1 as color };
    }
}
import PropTypes from "prop-types";
