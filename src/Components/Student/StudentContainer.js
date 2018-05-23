import React, { Component } from 'react';
import StudentPresenter from './StudentPresenter';

class Student extends Component {
    static  propTypes = {};
    state = {};
    render() {
        return <StudentPresenter {...this.props} />
    };
};

export default Student;