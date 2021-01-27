import react, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
/* Create a new Potluck:
We need to: Invite friends (via email?), Adjust the Date, Time, and Location of the event. Create a List of food items for Guest to check off. Ability to edit to add photos (stretch) */

const NewEventForm = (props) => {
  //to allow for organizers to edit the form afterwards.
  const [isEditing, setIsEditing] = useState(false);
  //Empty event
  const emptyEvent = {
    eventTitle: "",
    friendsList: [],
    dateTime: "",
    location: "",
    foodItems: [],
    photos: [],
  };
  const [newEvent, setNewEvent] = useState({ emptyEvent });
  const handleChange = () => {
    //I'll fill this out tonight.
  };
  const handleSubmit = () => {
    //I'll fill this out tonight.
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="eventTitle">Potluck Name</Label>
        <Input
          type="text"
          name="eventTitle"
          id="eventTitle"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="friendsList">Guests (include your email!)</Label>
        <Input
          type="text"
          name="friendsList"
          id="friendsList"
          onChange={handleChange}
          placeholder="enter email addresses only separated by a comma."
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="date">Date & Time</Label>
        <Input
          type="datetime-local"
          name="date"
          id="date"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          type="text"
          name="location"
          id="location"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="foodItems">Potluck Items needed</Label>
        <Input
          type="text"
          name="foodItems"
          id="foodItems"
          onChange={handleChange}
          placeholder="List items with a comma separating them."
          required
        />
      </FormGroup>
    </Form>
  );
};
