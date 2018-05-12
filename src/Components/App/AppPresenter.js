import React, { Fragment } from 'react';
import Header from 'Components/Header';
import Store from 'store';
import styled from 'styled-components';

import GoOut from 'Components/GoOut';
import SleepOut from 'Components/SleepOut';

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 50px;
`;

const GoOutContainer = styled.div`
    grid-start-column: 1;
`;

const SleepOutContainer = styled.div`
    grid-start-column: 2;
`;

const Title = styled.h3`
    padding-left: 40px;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 50px;
`;

const AppPresenter = () => (
    <Fragment>
        <Header />
        <Container>
            <GoOutContainer>
                <Title>외출 신청 학생 리스트</Title>
                <GoOut />
            </GoOutContainer>
            <SleepOutContainer>
                <Title>외박 신청 학생 리스트</Title>
                <SleepOut />
            </SleepOutContainer>
        </Container>
    </Fragment>
);

export default AppPresenter;