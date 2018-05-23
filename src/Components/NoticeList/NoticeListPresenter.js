import React, { Fragment } from 'react';
import styled from 'styled-components';

import {
  changeDateFormat
} from 'Helper/CustomDate';

const Container = styled.div`
    width: 50%;
    height: 50px;
    border: 1px solid #999999;
    border-radius: 3px;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const View = styled.span`
    display: block;
`;

const Tr = styled.tr`
    text-align: center;
`;

const NoticeListPresenter = ({ writer, content, writeDate, modifyDate }) => {
    return (
        <Fragment>
            <Tr>
                <td>{writer}</td>
                <td>{content}</td>
                <td>{changeDateFormat(writeDate)}</td>
                <td>{changeDateFormat(modifyDate)}</td>
            </Tr>
        </Fragment>
    );
}

export default NoticeListPresenter;