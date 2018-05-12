import React, { Component, Fragment } from 'react';
import Student from 'Components/Student';
import Store from 'store';

import { GetGoOutData, AcceptGoOut } from 'Helper/Server';

class GoOutContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goOutRequestUsers: '',
        };
    }

    componentDidMount = async () => {
        // get server data
        const goOutRequestUsers = await GetGoOutData();

        this.setState({
            goOutRequestUsers,
        });
    }

    accept = (idx, classIdx, arrayIdx) => {
        AcceptGoOut(idx, classIdx);

        let goOutRequestUsers = [...this.state.goOutRequestUsers];
        goOutRequestUsers.splice(arrayIdx, 1);
        this.setState({ goOutRequestUsers });
    }

    render() {
        return (
            <Store.Provider value={this.state}>
                <Fragment>
                    <table style={{ marginLeft: "40px", borderRadius: "3px", width: "90%", backgroundColor: "#313131", color: "white"}}>
                        <tr>
                            <th>이메일</th>
                            <th>시작 날짜</th>
                            <th>만료 날짜</th>
                            <th>승인</th>
                        </tr>
                    <Store.Consumer>
                        {store => {
                            return Object.keys(store.goOutRequestUsers).map(key => (
                                <Student key={store.goOutRequestUsers[key].idx}
                                    arrayIdx={key}
                                    idx={store.goOutRequestUsers[key].idx}
                                    studentEmail={store.goOutRequestUsers[key].studentEmail}
                                    reason={store.goOutRequestUsers[key].reason}
                                    classIdx={store.goOutRequestUsers[key].classIdx}
                                    startTime={store.goOutRequestUsers[key].startTime}
                                    endTime={store.goOutRequestUsers[key].endTime}
                                    accept={this.accept}
                                />
                            ));
                        }}
                    </Store.Consumer>
                    </table>
                </Fragment>
            </Store.Provider>
        );
    };
};

export default GoOutContainer;