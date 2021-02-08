import React, { useState, useContext } from 'react';
import { Form, FormGroup, Label, Input,Button, Card, Container } from 'reactstrap';
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import Navigation from "../Navigation/Navigation";
import "./SignUp.css"
import ptimg from "../Login/ptimg.svg"

const initialState = {
    username: "",
    password: "",
	  // email: "",
    firstname:"",
    lastname:""
};

const SignUp = (props) => {
    const [newUser, setNewUser] = useState(initialState);
    const user = useContext(UserContext);

    const changeHandler = (event) => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = (event) => {
        event.preventDefault();
        axios.post("https://tt-webpt-92-potluck-app.herokuapp.com/api/register", newUser)
          .then((res) => {
            user.username = newUser.username;
            user.id = res.data.id;
            localStorage.setItem("username", newUser.username);
            localStorage.setItem("id", user.id);
            console.log(res.data);
            //props.history.push("/Home");
          })
          .catch((err) => {
            console.error("something went wrong: ", err);
          })
    };

    return (
        <>
        <Navigation/>
        <Container className="signUpContainer">
          <Card className="signUpCard">
            <img src={ptimg} alt="logo" className="ptlogo"/>
            <h1 className="signUpHeader">Sign up for perfect Potluck</h1>
            <Form onSubmit={submitForm}>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  className="signUpInput"
                  placeholder="Example: king_of_potluck"
                  value={newUser.username}
                  onChange={changeHandler}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  className="signUpInput"
                  placeholder="Example:lessThen3"
                  value={newUser.password}
                  onChange={changeHandler}
                  required
                />
              </FormGroup>
              <FormGroup>
                      <Label for="firstname">First name</Label>
                      <Input
                        type="text"
                        name="firstname"
                        id="firstname"
                        className="signUpInput"
                        placeholder="Example: John"
                        value={newUser.firstname}
                        onChange={changeHandler}
                        required
                      />
              </FormGroup>
              <FormGroup>
                      <Label for="lastname">Last name</Label>
                      <Input
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="signUpInput"
                        placeholder="Example: Silverhand"
                        value={newUser.lastname}
                        onChange={changeHandler}
                        required
                      />
              </FormGroup>
              {/* <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter your email"
                  value={newUser.email}
                  onChange={changeHandler}
                  required
                />
              </FormGroup> */}
              <Button type="submit" className="signUpButton">Submit</Button>
            </Form>
            </Card>
          </Container>
        </>
      );
};

export default SignUp;
