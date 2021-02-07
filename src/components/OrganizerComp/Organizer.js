import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Button, Card, Cardheader, CardTitle, CardText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";


const Organizer = () => {

	const { user, setUser } = useContext(UserContext);
	

	 useEffect(() => {
		axiosWithAuth()
			.get(`/users/organized`)
				.then(res => {
					console.log(res);
				})
				.catch(err => console.log(err))
	 },[]);




	return (
		<h1>
			test
		</h1>
	)

}

export default Organizer;