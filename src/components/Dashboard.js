import React, {useState, useEffect} from "react";
import GuestView from "./GuestView";
import OrganizerView from "./OrganizerView";
import NewEventForm from "./Potlucks/NewEventForm";

//need to GET users and events from the server and then create the rules to direct if statements to the GuestView and OrganizerView.
//Then the state will be mapped to props for those components to use.
const Dashboard = (props) => {
    const getUsers = () => {

    }
const [events, setEvents] = useState([]);
useEffect(() => {
    const id = 
})
  return (
      <div className="internalDash">
          <div className="dashNav">
          <h2>Find a Potluck:</h2>
          <button>Guest Page</button>
          </div>
          <div className="dashNav">
          <h3>Edit your Potluck Event:</h3>
          <button>Event Organizer Page</button>
          </div>
          <h2>Create a New PotLuck:</h2>
          <NewEventForm />
      </div>
  );
};

export default Dashboard;
