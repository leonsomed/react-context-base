import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

function Button(props) {
    const { title } = props;

    return (
        <div className={styles.mybutton}>
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
