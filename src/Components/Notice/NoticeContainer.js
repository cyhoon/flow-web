import React, { Component, Fragment } from 'react';
import Store from 'store';
import NoticePresenter from './NoticePresenter';

class NoticeContainer extends Component {
    constructor(props) {
      super(props);

      this.state = {
          
      };
    }

    render() {
        return (
            <Store.Provider value={this.state}>
                <NoticePresenter />
            </Store.Provider>
        )
    }
}

export default NoticeContainer;