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
    friendsList: [
      {
        name: "",
        email: "",
      },
    ],
    date: "",
    time: "",
    location: "",
    foodItems: [
      {
        itemName: "",
        fulfilled: false,
      },
    ],
    photos: [
      {
        src: "",
        title: "",
      },
    ],
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
          <Label for=''></Label>
      </FormGroup>
    </Form>
  );
};
