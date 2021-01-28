import React, { useState } from 'react';
import { Form, FormGroup, Label, Input,Button } from 'reactstrap';
import axios from "axios";

const initialState = {
    username: "",
    password: "",
	email: "",
	full_name:""
};

const SignUp = () => {
    const [newUser, setNewUser] = useState(initialState);

    const changeHandler = (event) => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = (event) => {
        event.preventDefaul();
        console.log(newUser);
        //axios post 
    };

    return (
        <>
          <Form onSubmit={submitForm}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="enter your username"
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
                placeholder="enter your password"
                value={newUser.password}
                onChange={changeHandler}
                required
              />
            </FormGroup>
			<FormGroup>
              <Label for="full_name">Username</Label>
              <Input
                type="text"
                name="full_name"
                id="full_name"
                placeholder="enter your full name"
                value={newUser.full_name}
                onChange={changeHandler}
                required
              />
			</FormGroup>
            <FormGroup>
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
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </>
      );
};

export default SignUp;
