import React, { useState, useContext } from "react";
import axios from "axios";
import { Button, Form, Input, Card, Container, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css'
import "./Login.css";
import UserContext from "../../contexts/UserContext";
import ptimg from "./ptimg.svg"

const initialState = {
  username: "",
  password: ""
};

const Login = (props) => {

  const [loginData, setLoginData] = useState(initialState);
  const { setUser } = useContext(UserContext);

  const changeHandler = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  };

  const submitLogin = (event) => {
    event.preventDefault();
	  // console.log(loginData);
    axios.post("https://tt-webpt-92-potluck-app.herokuapp.com/api/login", loginData)
      .then((res) => {
        console.log("submitted login:", res)
        //console.log(loginData);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", loginData.username);
        localStorage.setItem("id", res.data.id);
        setUser({
          username: loginData.username
        });
        props.history.push("/Home") // need private route path
      })
      .catch((err) => {
        console.error("something went wrong: ", err);
      })

  };

  return (
    <>
      <Container className="loginContainer">
        <Col>
        <Card className="loginCard">
          <img src={ptimg} alt="logo" className="ptlogo" />
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