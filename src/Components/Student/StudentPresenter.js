import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

const UserInformation = styled.div`
    background-color: #313131;
    width: 85%;
    margin-left: 40px;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 15px;
    font-size: 18px;
    color: white;
    text-align: center;
    font-weight: bold;
    line-height: 20px;
    position: relative;

    display: grid;
    grid-template-columns: 17% 39% 39% 5%;
`;

const StudentEmail = styled.span``;

const StartTime = styled.span``;

const EndTime = styled.span``;

const Accept = styled.span`
    cursor: pointer;
`;

// { idx, start_time, end_time, reason, class_idx, student_email }
const StudentPresenter = ({ arrayIdx, idx, studentEmail, reason, startTime, endTime, classIdx, accept }) => (
    <UserInformation>
        <StudentEmail>{studentEmail}</StudentEmail>
        <StartTime>시작 날짜: {new Date(startTime).toLocaleString()}</StartTime>
        <EndTime>만료 날짜: {new Date(endTime).toLocaleString()}</EndTime>
        <Accept onClick={() => accept(idx, classIdx, arrayIdx)}>승인</Accept>
    </UserInformation>
);

export  default StudentPresenter;