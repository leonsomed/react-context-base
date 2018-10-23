import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import image from '../../assets/images/react.png';
import Button from '../../components/button';

const Page = (props) => {
    const { title } = props;

    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>

            <Button title="Continue" />

            <img alt="test" src={image} />
        </div>
    );
};

Page.defaultProps = {
    title: '',
};

Page.propTypes = {
    title: PropTypes.string,
};

export default Page;
