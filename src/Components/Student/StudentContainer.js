import React, { Component, Fragment } from 'react';
import StudentPresenter from './StudentPresenter';
import Store from 'store';

class Student extends Component {
    static  propTypes = {};
    state = {};
    render() {
        return <StudentPresenter {...this.props} />
    };
};

export default Student;