import React, { Component, Fragment } from 'react';
import HeaderPresenter from './HeaderPresenter';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <HeaderPresenter />
            </Fragment>
        );
    };
}

export default Header;