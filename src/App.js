import React, { useContext, useState } from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp"
import PrivateRoute from "./components/PrivateRoute"
import Navagation from "./components/navagation/navagation"
import EventContext, { EventProvider } from "./contexts/EventContext";
import { UserProvider } from "./contexts/UserContext";

function App() {

	const event = useContext(EventContext);
	const [user, setUser] = useState({
	  username: localStorage.getItem("username"),
	  user_id: localStorage.getItem("user_id")
	});

	return (
	  <EventProvider value={event}>
		<UserProvider value={{user, setUser}}>
    <div className="App">
  <Navagation />

 </div>

		</UserProvider>
	  </EventProvider>
	);
  }

  export default App;

 // <div className="App">
 // <Navagation />
//   <Switch>
//    <PrivateRoute exact path="/Home" component={Home} />
 //   <Route exact path="/" component={LoginFunctional} />
//    <Route exact path="/SignUp" component={SignUp} />
//    <PrivateRoute exact path="/CreateEvent" component={CreateEvent} />
//  </Switch>
// </div>