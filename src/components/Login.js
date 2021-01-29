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

const Login = (props) => {
  const [loginData, setLoginData] = useState(initialState);

  const changeHandler = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  };

  const submitLogin = (event) => {
    event.preventDefault();
	//console.log(loginData);
	axios.post("http://", loginData) // need api
		.then((res) => {
			//console.log("submitted login:", res)
			localStorage.setItem("token", res.data.payload);
			props.history.push("/Home") // need private route path
		})
    
  };

  return (
    <>
      <LoginContainer>
      <Form onSubmit={submitLogin}>
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
        <Button type="submit">Login</Button>
      </Form>
    </LoginContainer>
    </>
  )
};

export default Login;