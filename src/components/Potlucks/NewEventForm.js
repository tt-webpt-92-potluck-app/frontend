import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import EventContext from "../../contexts/EventContext";

const initialValues = {
  firstName: "",
  lastName: "",
  name: "",
  location: "",
  time: "",
  date: "",
};

const NewEventForm = () => {
  const [potlucks, setPotlucks] = useState(initialValues);
  // const {event, setEvent} = useContext(EventContext);
  // const [formValues, setFormValues] = useState(initialPotluckEvents);
  const handleChange = (e) => {
    setPotlucks({
      ...potlucks,
      [e.target.name]: e.target.value,
    });
  };
  const newPotluck = {
    id: Date.now(),
    name: potlucks.eventTitle,
    firstName: potlucks.firstName,
    lastName: potlucks.lastName,
    location: potlucks.location,
    time: potlucks.time,
    date: potlucks.date,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPotluck = {
      id: Date.now(),
      name: potlucks.eventTitle,
      firstName: potlucks.firstName,
      lastName: potlucks.lastName,
      location: potlucks.location,
      time: potlucks.time,
      date: potlucks.date,
    };
    axiosWithAuth()
      .post(`/potluck`, newPotluck)
      .then((res) => {
        console.log(`Post New Event Success: ${res.data}`);
        setPotlucks(initialValues);
      })
      .catch((err) => {
        console.log(`Error on POST for new Event ${err}`);
        console.log("submitted data: ", newPotluck);
      });
    //setEvent([...event, newPotluck]);
    setPotlucks([...potlucks, newPotluck]);
  };
  //setPotlucks([...potlucks, newPotluck]);
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="eventTitle">Potluck Name</Label>
        <Input
          type="text"
          name="eventTitle"
          value={potlucks.eventTitle}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="firstName">Your First Name</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          value={potlucks.firstName}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Your Last Name</Label>
        <Input
          type="text"
          name="lastName"
          value={potlucks.lastName}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location of the Event</Label>
        <Input
          type="text"
          name="location"
          value={potlucks.location}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="date">Day of Event</Label>
        <Input
          type="date"
          name="date"
          value={potlucks.date}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="time">Time of Event</Label>
        <Input
          type="time"
          name="time"
          value={potlucks.time}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
export default NewEventForm;
