import React from 'react';
import Page from '../../pages/dashboard';
import config from '../../config';
import { AppContext } from '../../contexts/app';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: config.test,
        };
    }

    render() {
        const { title } = this.context;

        return (
            <Page
                title={title}
            />
        );
    }
}

Dashboard.contextType = AppContext;

export default Dashboard;
