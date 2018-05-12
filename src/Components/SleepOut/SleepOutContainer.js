import React, { Component, Fragment } from 'react';
import Student from 'Components/Student';
import Store from 'store';

import { GetSleepOutData, AcceptSleepOut } from 'Helper/Server';

class SleepOutContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sleepOutRequestUsers: '',
        }
    }

    componentDidMount = async () => {
        // get server data
        const sleepOutRequestUsers = await GetSleepOutData();

        this.setState({
            sleepOutRequestUsers: sleepOutRequestUsers,
        });

        console.log(this.state.sleepOutRequestUsers);
    }

    accept = (idx, classIdx, arrayIdx) => {
        AcceptSleepOut(idx, classIdx);

        let sleepOutRequestUsers = [...this.state.sleepOutRequestUsers];
        sleepOutRequestUsers.splice(arrayIdx, 1);
        this.setState({ sleepOutRequestUsers });
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
                            return Object.keys(store.sleepOutRequestUsers).map(key => (
                                <Student key={store.sleepOutRequestUsers[key].idx}
                                    idx={store.sleepOutRequestUsers[key].idx}
                                    studentEmail={store.sleepOutRequestUsers[key].studentEmail}
                                    reason={store.sleepOutRequestUsers[key].reason}
                                    classIdx={store.sleepOutRequestUsers[key].classIdx}
                                    startTime={store.sleepOutRequestUsers[key].startTime}
                                    endTime={store.sleepOutRequestUsers[key].endTime}
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

export default SleepOutContainer;