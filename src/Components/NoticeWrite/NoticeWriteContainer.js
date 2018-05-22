import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Store from 'store';

const Container = styled.div`
    width: 50%;
`;

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    height: 300px;
    padding: 10px;
    font-size: 15px;
    border-radius: 3px;
    margin-bottom: 3px;
    outline: none;
`;

const InputFile = styled.input`
    margin-bottom: 3px;
`;

const Button = styled.button`
    display: block;
    width: 100%;
    height: 40px;
    background-color: #313131;
    outline: none;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    color: white;
    cursor: pointer;
`;

class NoticeWriteContainer extends Component {
    constructor(props) {
      super(props);
    }

    getFileData = (event) => {
        const fileData = event.target.files[0];
        console.log('file data: ', fileData);
    }

    render() {
        return (
          <Container>
              <TextArea />
              <InputFile 
                type='file'
                onChange={this.getFileData} />
              <Button>완료</Button>
          </Container>        
        );
    }
};

export default NoticeWriteContainer;