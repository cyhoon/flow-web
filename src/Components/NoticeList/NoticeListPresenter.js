import React, { Fragment } from 'react';
import styled from 'styled-components';

import {
  changeDateFormat
} from 'Helper/CustomDate';

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