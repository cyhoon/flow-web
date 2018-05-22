import React, { Fragment } from 'react';
import styled from 'styled-components';

import Header from 'Components/Header';

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 50px;
`;

const NoticePresenter = () => {
    return (
        <Fragment>
            <Header />
            <h1>Notice Presenter</h1>
        </Fragment>
    );
};

export default NoticePresenter;