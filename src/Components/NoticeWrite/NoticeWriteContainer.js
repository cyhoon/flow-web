import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
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

      this.state = {
          content: '',
      };
    }

    handleContent = (event) => {
        this.setState({ content: event.target.value });
    }

    getFileData = (event) => {
        const fileData = event.target.files[0];
        this.props.fileUpload(fileData);
    }

    submitData = async () => {
        await this.props.writeNotice(this.state.content); 
        await this.setState({ content: '' });
    }

    render() {
        return (
          <Container>
              <TextArea value={ this.state.content } onChange={ this.handleContent }></TextArea>
              <InputFile 
                type='file'
                onChange={this.getFileData} />
              <Button onClick={() => { this.submitData(); }}>완료</Button>
          </Container>        
        );
    }
};

export default NoticeWriteContainer;