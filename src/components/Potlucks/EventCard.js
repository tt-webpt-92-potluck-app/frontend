import React, { useEffect, setState } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardSubtitle } from "reactstrap";

export default function EventCard(props) {
  const { potlucks, setPotlucks } = props;
  console.log(potlucks, "Event Card data");
  useEffect(() => {
    axios
      .get("https://tt-webpt-92-potluck-app.herokuapp.com/potluck")
      .then((res) => {
        setPotlucks(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err, `Event Card GET error potlucks`);
      });
  });

  const { foodList, setFoodList } = setState([]);
  useEffect(() => {
    axios
      .get("https://tt-webpt-92-potluck-app.herokuapp.com/food")
      .then((res) => {
        setFoodList(res.data);
      })
      .catch((err) => {
        console.log(err, `EventCard error GET foodList`);
      });
  });

  return (
    <div>
      {potlucks.map((potluck) => {
        return (
          <Card key={potluck.id}>
            <CardHeader>{potluck.eventName}</CardHeader>
            <CardTitle>Location: {potluck.location}</CardTitle>
            <CardSubtitle>Date: {potluck.date}</CardSubtitle>
            <CardSubtitle>Time: {potluck.time}</CardSubtitle>
            <CardSubtitle>
              Host Name: {potluck.firstName} {potluck.lastName}
            </CardSubtitle>
            <CardSubtitle>Food to Bring:</CardSubtitle>
            <ul>
              {foodList.map((item) => {
                <li>{item.name}</li>;
              })}
            </ul>
          </Card>
        );
      })}
      {/*Delete button? Do we want this?
        <button onClick = (e) => {
          e.stopPropagation()
          e.preventDefault()
          this.triggerDelete(permit);
          deleteEvent(potluck.id)>Delete this Event</button>
        */}
    </div>
  );
}
