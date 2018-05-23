import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Flex, { FlexItem } from 'styled-flex-component';

const Header = styled.header`
    height: 80px;
    background-color: #313131;
    padding: 0 40px;
    margin-bottom: 30px;
    color: white;
`;

const Menu = styled.div`
`;

const MenuItem = styled.span`
    display: inline-block;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    margin-left: 30px;
`

const HeaderPresenter = () => (
    <Header>
        <Flex full justifyBetween alignCenter>
            <FlexItem>
                <h2>Flow-Web</h2>
            </FlexItem>
            <Menu>
                <MenuItem><Link style={{ color: 'white', textDecoration: 'none' }} to='/'>공지</Link></MenuItem>
                <MenuItem><Link style={{ color: 'white', textDecoration: 'none' }} to='/out'>외출 및 외박</Link></MenuItem>
            </Menu>
        </Flex>
    </Header>
);

export default HeaderPresenter;