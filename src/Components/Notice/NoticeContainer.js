import React, { Component, Fragment } from 'react';
import Store from 'store';
import NoticePresenter from './NoticePresenter';

import {
  GetNoticeList
} from 'Helper/Server';

class NoticeContainer extends Component {
    constructor(props) {
      super(props);

      this._writeNotice = (content, file) => {
        console.log('Hello, World!');
      };
      
      this.state = {
        list: [],
        writeNotice: this._writeNotice,
      };
    }

    componentDidMount = async () => {
      // get notice list
      const list = await GetNoticeList();
      this.setState({ list });
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