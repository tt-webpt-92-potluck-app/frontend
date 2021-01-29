import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input, Card, Container, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css'
import "./Login.css";

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
      <Container className="loginContainer">
        <Col>
        <Card className="loginCard">
          <h1 className="loginHeader">Login to your account</h1>
          <Form onSubmit={submitLogin}>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Your username"
                className="loginInput"
                onChange={changeHandler}
                value={loginData.username}
              />
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="you password"
                className="loginInput"
                onChange={changeHandler}
                value={loginData.password}
              />
            <Button className="loginButton" type="submit">Login</Button>
          </Form>
      </Card>
      </Col>
    </Container>
    </>
  )
};

export default Login;