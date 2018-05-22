import React, { Component, Fragment } from 'react';
import AppPresenter from './AppPresenter';

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
