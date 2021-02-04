import react, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";

const initialFormValues = {
  firstName: "",
  lastName: "",
  name: "",
  location: "",
  time: "",
  date: "",
};
const initialPotluckEvents = [];

const NewEventForm = () => {
  const [potlucks, setPotlucks] = useState(initialFormValues);
  const [formValues, setFormValues] = useState(initialPotluckEvents);
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPotluck = {
      id: Date.now(),
      name: formValues.eventTitle,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      location: formValues.location,
      time: formValues.time,
      date: formValues.date,
    };
    axios.post("https://tt-webpt-92-potluck-app.herokuapp.com/potlucks", newPotluck)
    .then((res) => {
      console.log(`Post New Event Success: ${res.data}`)
      setFormValues(initialFormValues);
    })
    .catch((err) => {
      console.log(`Error on POST for new Event ${err}`)
    })
    };
    setPotlucks([...potlucks, newPotluck]);
  };
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
    </Form>
  )
  };
export default NewEventForm;
