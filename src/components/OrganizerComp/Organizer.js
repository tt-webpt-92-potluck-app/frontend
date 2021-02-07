import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Button, Card, CardHeader, CardTitle, CardSubtitle,  CardText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Orgstyling.css"


const DummyData = [
	 {
		id: "23034034",
		name: "Eli's Birthday",
		location: "Cleveland",
		date: "01/01/2021",
		time:"13:10",
	},
	{
		name: "Pool party",
		location: "Los Angeles",
		date: "02/02/2022",
		time:"00:15"
	},
	{
		name: "Family dinner",
		location: "Home",
		date: "01/08/2022",
		time:"18:20"
	}
];

const Organizer = () => {
	const [eventData, setEventData] = useState(DummyData);

	const deleteEvent = (id) => {
		const newEventData = [...eventData];
		const deleteIndex = newEventData.findIndex((event) => event.id === id);
		newEventData.splice(deleteIndex, 1);
		setEventData(newEventData);
	  }	
	//  useEffect(() => {
	// 	axiosWithAuth()
	// 		.get(`/users/organized`)
	// 			.then(res => {
	// 				console.log(res);
	// 			})
	// 			.catch(err => console.log(err))
	//  },[]);

	const editEvent = (event) => {}

	return (
		<div className="organizer-card">
			<h1>Your events</h1>
			{eventData.map((event) => {
				return(
				<Card className="event-card">
					<br/>
					<CardHeader className="event-name" >{event.name}</CardHeader>
					<CardTitle className="event-location">
						{"Location: " + event.location}
					</CardTitle>
					<CardSubtitle className="event-date">
						{
							"Date: " + event.date.slice(0,2) + "/" + event.date.slice(3,5) + "/" + event.date.slice(6,10)
						}
					</CardSubtitle>
					<CardSubtitle className="event-time">
						{
							"Time: " + event.time.slice(0,2) + ":" + event.time.slice(3,5)
						}
					</CardSubtitle>
					<div className="btns">
					<Button className="edit-btn">Edit</Button>
					<Button className="delete-btn" onClick={() => deleteEvent(event.id)}>Delete</Button>
					</div>
				</Card>
				)
			})}
		</div>
	)

}

export default Organizer;