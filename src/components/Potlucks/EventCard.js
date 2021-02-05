import React, { useEffect, setState } from "react";
import axios from "axios";

export default function EventCard(props) {
  const { potlucks, setPotlucks } = props;
  console.log(potlucks, "Event Card data");
  useEffect(() => {
    axios
      .post("https://tt-webpt-92-potluck-app.herokuapp.com/potlucks")
      .then((res) => {
        setPotlucks(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err, `Event Card POST error`);
      });
  });

  const deleteEvent = (eventID) => {
    axios
      .delete(
        `https://tt-webpt-92-potluck-app.herokuapp.com/potlucks/${eventID}`
      )
      .then((res) => {
        const newList = potlucks.filter((potluck) => {
          return potluck.id !== res.data;
        });
      });
    setPotlucks(newList).catch((err) => {
      console.log(err, "Issue with deleteEvent in EventCard.");
    });
  };
  return (
    <FormData>
      <Form>
        {potlucks.map((potluck) => {
          return (
            <div key={potluck.id}>
              <h2>{potluck.eventName}</h2>
              <p>Location: {potluck.location}</p>
              <p>Date: {potluck.date}</p>
              <p>Time: {potluck.time}</p>
              <p>
                Host Name: {potluck.firstName} {potluck.lastName}
              </p>
            </div>
          );
        })}
        {/*Delete button? Do we want this?
        <button onClick = (e) => {
          e.stopPropagation()
          e.preventDefault()
          this.triggerDelete(permit);
          deleteEvent(potluck.id)>Delete this Event</button>
        */}
      </Form>
    </FormData>
  );
}
