import React from 'react';
import Page from '../../pages/dashboard';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Hello World',
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
