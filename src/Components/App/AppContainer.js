import React, { Component, Fragment } from 'react';
import AppPresenter from './AppPresenter';
import Store from 'store';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <AppPresenter />
            </Fragment>
        );
    };
}

export default App;
