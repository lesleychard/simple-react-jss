import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
    root: {
        border: 'none',
        borderRadius: `${theme.border.radius}em`,
        cursor: 'pointer',
        font: {
            family: theme.typography.fontFamily,
            weight: theme.typography.fontWeightBold,
        },
        fontSize: props => props.size,
        lineHeight: theme.typography.lineHeight,
        padding: '0.75em 1em',
        textTransform: 'uppercase',
    },
    primary: {
        backgroundColor: theme.palette.primary,
        color: theme.palette.background,
    },
    secondary: {
        backgroundColor: theme.palette.secondary,
        color: theme.palette.text,
    },
});

class Button extends PureComponent {
    static defaultProps = {
        children: null,
        color: 'primary',
        size: 16,
    };

    static propTypes = {
        classes: PropTypes.object.isRequired,
        children: PropTypes.node,
        color: PropTypes.oneOf(['primary', 'secondary']),
        // eslint-disable-next-line react/no-unused-prop-types
        size: PropTypes.number,
    };

    render() {
        const {
            classes,
            children,
            color,
        } = this.props;
        return (
            <button
                className={classNames(
                    classes.root,
                    classes[color],
                )}
                type="button"
            >
                {children}
            </button>
        );
    }
}

export default injectSheet(styles)(Button);
