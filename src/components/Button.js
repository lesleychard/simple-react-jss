import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary,
        border: 'none',
        borderRadius: `${theme.border.radius}em`,
        color: theme.palette.background,
        cursor: 'pointer',
        font: {
            family: theme.typography.fontFamily,
            size: theme.typography.fontSize,
            weight: theme.typography.fontWeightBold,
        },
        lineHeight: theme.typography.lineHeight,
        padding: '0.75em 1em',
        textTransform: 'uppercase',
    },
});

class Button extends PureComponent {
    static defaultProps = {
        children: null,
    };

    static propTypes = {
        classes: PropTypes.object.isRequired,
        children: PropTypes.node,
    };

    render() {
        const {
            classes,
            children,
        } = this.props;
        return (
            <button
                className={classes.root}
                type="button"
            >
                {children}
            </button>
        );
    }
}

export default injectSheet(styles)(Button);
