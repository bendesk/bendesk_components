export function InfoWithIcon({ title, style, className, description, headerIcon }: {
    title: any;
    style: any;
    className: any;
    description: any;
    headerIcon: any;
}): JSX.Element;
export namespace InfoWithIcon {
    export namespace propTypes {
        export const title: PropTypes.Requireable<string>;
        export const description: PropTypes.Requireable<string>;
    }
    export namespace defaultProps {
        const title_1: string;
        export { title_1 as title };
        const description_1: string;
        export { description_1 as description };
    }
}
import PropTypes from "prop-types";
