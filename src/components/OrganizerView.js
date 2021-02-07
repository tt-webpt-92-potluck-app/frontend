import React from "react";
import EventCard from "./Potlucks/EventCard";
import NewEvent from "./Potlucks/NewEventForm";

const OrganizerView = () => {
  return (
    <>
      <p>Organizer View</p>
      <EventCard />
      <NewEvent />
    </>
  );
};

export default OrganizerView;
