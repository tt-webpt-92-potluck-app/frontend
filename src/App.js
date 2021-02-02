import logo from './logo.svg';
import './App.css';
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp"
import Navigation from "./components/Navigation/Navigation";
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
		  </div>
		</UserProvider>
	  </EventProvider>
	);
  }

  export default App;

