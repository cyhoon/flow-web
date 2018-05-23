import React, { Component, Fragment } from 'react';
import Store from 'store';
import NoticePresenter from './NoticePresenter';

import {
  GetNoticeList,
  FileUpload,
  WriteNotice
} from 'Helper/Server';

import {
  changeDateFormat
} from 'Helper/CustomDate';

class NoticeContainer extends Component {
    constructor(props) {
      super(props);

      this._writeNotice = async (content) => {
        const writeDate = changeDateFormat(Date.now());
        const modifyDate = changeDateFormat(Date.now());

        const response = await WriteNotice(content, writeDate, modifyDate, this.state.file);

        if (response.status === 200) {
          const data = {
            writer: response.data.writer,
            content,
            writeDate,
            modifyDate,
          };

          this.setState({ list: [data, ...this.state.list] });
        }
      };

      this._fileUpload = async (file) => {
        const response = await FileUpload(file);

        if (response.status === 200) { // 업로드 성공
          const upload_name = file.name;
          const { upload_dir } = response.data;

          this.setState({ file: { upload_name, upload_dir } });
        }
      };
      
      this.state = {
        list: [],
        writeNotice: this._writeNotice,
        fileUpload: this._fileUpload,
        file: null,
      };
    }

    componentDidMount = async () => {
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