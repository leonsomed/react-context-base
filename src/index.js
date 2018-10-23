import React from 'react';
import ReactDOM from 'react-dom';

import './assets/scss/index.scss';
import image from './assets/images/react.png'
import font from './assets/fonts/raustila-Regular.ttf'
import Button from './components/button';

class App extends React.Component {
    async componentDidMount() {
        const a = await Promise.resolve({ wuut: 1 });

        console.log({
            ...a,
        });
    }

    render() {
        return (
            <div className="wrapper">
                <h1>hey dude</h1>

                <Button />

                <img src={image} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));
