import React from 'react';

export const AppContext = React.createContext({
    users: [],
    title: 'default',
});

export class AppContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: ['john', 'juan'],
            title: 'App',
        };
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export const AppContextConsumer = AppContext.Consumer;
