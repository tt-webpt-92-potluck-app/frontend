import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

const LoginContainer = styled.div`
  padding: 2rem;
  border: 3px solid black;
  border-radius: 20px;
  margin: 1rem auto;
`

const initialState = {
  username: "",
  password: ""
};

const Login = () => {
  const [loginData, setLoginData] = useState(initialState);

  const changeHandler = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  };

  const submitForm = (event) => {
    event.preventDefaul();
    console.log(loginData);
    //axios post 
  };

  return (
    <>
      <LoginContainer>
      <Form onSubmit={submitForm}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            onChange={changeHandler}
            value={loginData.username}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={changeHandler}
            value={loginData.password}
          />
        </FormGroup>
        <Button>Login</Button>
      </Form>
    </LoginContainer>
    </>
  )
};

export default Login;
