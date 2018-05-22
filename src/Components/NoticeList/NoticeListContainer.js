import React, { Component } from 'react';
import NoticeListPresenter from './NoticeListPresenter';

class NoticeListContainer extends Component {
    render() {
        console.log(this.props.list);
        return (
            <div>
                <table style={{ borderRadius: "3px", width: "90%", backgroundColor: "#313131", color: "white" }}>
                    <tr>
                        <th>작성자</th>
                        <th>내용</th>
                        <th>작성 날짜</th>
                        <th>수정 날짜</th>
                    </tr>
                    {
                        this.props.list.map((notice) => {
                            return (
                                <NoticeListPresenter {...notice} />
                            )
                        })
                    }
                </table>
            </div>
        );
    }
}

export default NoticeListContainer;