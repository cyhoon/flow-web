import axios from 'axios';
import randomstring from 'randomstring';

const host = 'http://flow.cafe24app.com';
// const host = 'http://localhost:4000';

const acceptGoOutUrl = '/out/go/accept'; // 외출 승인
const acceptSleepOutUrl = '/out/sleep/accept'; // 외박 승인

const unAcceptGoOutUrl = '/out/go/list/unaccept'; // 승인되지 않은 외출 신청 조회
const unAcceptSleepOutUrl = '/out/sleep/list/unaccept'; // 승인되지 않은 외박 신청 조회

const noticeUrl = '/notice';
const uploadUrl = '/upload';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJ0ZWFjaGVyXzFAZGdzdy5ocy5rciIsImNsYXNzSWR4IjpudWxsLCJhdXRoIjowLCJpYXQiOjE1MjcwNTgwODEsImV4cCI6MTUyNzY2Mjg4MSwiaXNzIjoiamVmZmNob2kuY29tIiwic3ViIjoidG9rZW4ifQ.0I9i0dZk606_CbWzC6DwNxr_-AjMFTQQFZC2TGnp91Q';
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJpaGVsbG8wNzIwQGdtYWlsLmNvbSIsImNsYXNzSWR4IjpudWxsLCJhdXRoIjowLCJpYXQiOjE1MjcwMzcxMDMsImV4cCI6MTUyNzY0MTkwMywiaXNzIjoiamVmZmNob2kuY29tIiwic3ViIjoidG9rZW4ifQ.HE68Gxvy75YszjcFhmwnjgr0rZEZli050KSpzn0wsBU';


const GetGoOutData = async () => { // 외출 데이터를 가지고 온다.
    const data = await axios.get(host + unAcceptGoOutUrl, {headers: {'x-access-token': `${token}`}});
    const goOutRequestUsers = data.data.data.unaccept_users;

    return goOutRequestUsers;
}

const GetSleepOutData = async () => { // 외박 신청 데이터를 가지고 온다.
    const data = await axios.get(host + unAcceptSleepOutUrl, {headers: {'x-access-token': `${token}`}});
    const sleepOutRequestUsers = data.data.data.unaccept_users;

    return sleepOutRequestUsers;
}

const AcceptGoOut = (go_out_idx, class_idx) => { // 외출 승인
    console.log(go_out_idx);
    console.log(class_idx);

    axios.post(host + acceptGoOutUrl, {
        go_out_idx,
        class_idx,
    }, {headers: {'x-access-token': `${token}`}});
}

const AcceptSleepOut = (sleep_out_idx, class_idx) => { // 외박 승인
    console.log(sleep_out_idx);
    console.log(class_idx);

    axios.post(host + acceptSleepOutUrl, {
        sleep_out_idx,
        class_idx,
    }, {headers: {'x-access-token': `${token}`}});
}

const GetNoticeList = async () => {
    const data = await axios.get(host + noticeUrl, {headers: {'x-access-token': `${token}`}});
    const noticeList = data.data.data.list;

    return noticeList;
}

const FileUpload = async (fileData) => {
    const fileName = randomstring.generate();

    const formData = new FormData();
    formData.append('file', fileData);
    formData.append('fileName', fileName);

    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'x-access-token': `${token}`,
        }
    }

    const response = await axios.post(host + uploadUrl, formData, config);
    return response.data;
}

const WriteNotice = async (content, write_date, modify_date, file) => {
    const config = {
        headers: {
            'content-type': 'application/json',
            'x-access-token': `${token}`,
        }
    };

    let data = null;

    if (file) {
        data = {
            content,
            write_date,
            modify_date,
            file,
        };
    } else {
        data = {
            content,
            write_date,
            modify_date
        }
    }

    const response = await axios.post(host + noticeUrl, data, config);
    return response.data;
}

export { 
    GetGoOutData, 
    GetSleepOutData, 
    AcceptGoOut, 
    AcceptSleepOut, 
    GetNoticeList,
    FileUpload,
    WriteNotice
};