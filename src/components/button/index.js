import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.scss';

const realClassNames = classNames.bind(styles);

function Button(props) {
    const { title } = props;

    return (
        <div
            className={realClassNames({
                myButton: true,
            })}
        >
            {title}
        </div>
    );
}

Button.defaultProps = {
    title: '',
};

Button.propTypes = {
    title: PropTypes.string,
};

export default Button;
