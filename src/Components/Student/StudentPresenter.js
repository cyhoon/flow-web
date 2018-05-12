import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

const UserInformation = styled.tr`
    color: #313131;
    font-size: 18px;
    font-weight: bold;
    background-color: white;
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
        <th><StudentEmail>{studentEmail}</StudentEmail></th>
        <th><StartTime>{new Date(startTime).toLocaleString()}</StartTime></th>
        <th><EndTime>{new Date(endTime).toLocaleString()}</EndTime></th>
        <th><Accept onClick={() => accept(idx, classIdx, arrayIdx)}>승인</Accept></th>
    </UserInformation>
);

export  default StudentPresenter;