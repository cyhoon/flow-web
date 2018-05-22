import React, { Fragment } from 'react';
import styled from 'styled-components';

import Header from 'Components/Header';

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 50px;
`;

const WriteContainer = styled.div`
    grid-start-column: 1;
`;

const ViewContainer = styled.div`
    grid-start-column: 2;
`;

const Title = styled.h3`
    padding-left: 40px;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 50px;
`;

const NoticePresenter = () => {
    return (
        <Fragment>
            <Header />
            <Container>
                <WriteContainer>
                    <Title>공지 작성</Title>
                </WriteContainer>
                <ViewContainer>
                    <Title>공지 리스트</Title>
                </ViewContainer>
            </Container>
        </Fragment>
    );
};

export default NoticePresenter;