import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import Flex, { FlexItem } from 'styled-flex-component';

const Header = styled.header`
    height: 80px;
    background-color: #313131;
    padding: 0 40px;
    margin-bottom: 30px;
    color: white;
`;

const HeaderPresenter = () => (
    <Header>
        <Flex full justifyBetween alignCenter>
            <FlexItem>
                <h2>Flow-Web</h2>
            </FlexItem>
        </Flex>
    </Header>
);

export default HeaderPresenter;