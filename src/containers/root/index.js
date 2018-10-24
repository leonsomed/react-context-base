import React from 'react';

class Root extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { children } = this.props;

        return children;
    }
}

export default Root;
