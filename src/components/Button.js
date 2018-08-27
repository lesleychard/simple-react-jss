import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import injectSheet from 'react-jss';

const styles = {
    root: {
        backgroundColor: 'grey',
    },
};

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
