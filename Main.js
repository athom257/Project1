import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './MainComponent';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

class Main extends React.Component {
    constructor() {
        super();
        console.log('Main constructor invoked ...');
    }

    render() {
        const store = configureStore();
        return <div>
          <Provider store={store}>
            <MainComponent />
          </Provider></div>
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));
