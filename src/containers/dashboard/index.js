import React from 'react';
import Page from '../../pages/dashboard';
import config from '../../config';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: config.test,
        };
    }

    render() {
        const { title } = this.state;

        return (
            <Page
                title={title}
            />
        );
    }
}

export default Dashboard;
