import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import GuestView from "./GuestView";
import OrganizerView from "./OrganizerView";
import NewEventForm from "./Potlucks/NewEventForm";
import EventContext from "../contexts/EventContext";
import UserContext from "../contexts/UserContext";
import { Collapse } from "reactstrap";
import axios from "axios";
import styled from "styled-components";

const CreateNewBtn = styled.button`
  padding: 1rem;
  background-color: orange;
  color: white;
  &:hover {
  }
`;

//need to GET users and events from the server (EventContext & UserContext) and then create the rules to direct if statements to the GuestView and OrganizerView.
//Then the state will be mapped to props for those components to use.
function Dashboard() {
  const username = localStorage.getItem("username");
  console.log(`Username: ${username}`);
  const [events, setEvents] = useState([]);

  const getData = () => {
    axiosWithAuth()
      .get("/potlucks")
      .then((res) => {
        console.log(`Dashboard response: ${res.data}`);
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(`Error on Dashboard GET data: ${err.response}`);
      });
  };
  const getUserInfo = () => {};

  //collapsable "Add New Event" Form:
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="internalDash">
      <div className="dashNav">
        <h3>Welcome {username}</h3>
        <h2>Find a Potluck:</h2>
        <button onClick>Guest Page</button>
      </div>
      <div className="dashNav">
        <h3>Edit your Potluck Event:</h3>
        <button>Event Organizer Page</button>
      </div>
      <CreateNewBtn onClick={toggle}>Create a New Potluck</CreateNewBtn>
      <Collapse isOpen={isOpen}>
        <NewEventForm />
      </Collapse>
    </div>
  );
}

export default Dashboard;
