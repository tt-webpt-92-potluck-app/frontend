import React, { useContext, useState } from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import {Login} from "./components/Login"
import SignUp from "./components/SignUp/SignUp"
import navagation from "./components/navagation"
import EventContext, { EventProvider } from "./contexts/EventContext";
import UserContext, { UserProvider } from "./contexts/UserContext";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";



function App() {

	const event = useContext(EventContext);
	const [user, setUser] = useState({
	  username: localStorage.getItem("username"),
	  id: localStorage.getItem("id")
	});

	return (
	  <EventProvider value={event}>
		<UserProvider value={{user, setUser}}>
    	<div className="App">
			<Navigation/>
<switch>
<PrivateRoute exact path="/Home" component={Dashboard} />
<Route exact path="/" component={Login}/>
<Route exact path="/SignUp" component={SignUp} />
<PrivateRoute exact path="/Users" component={UserContext} />

</switch>
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