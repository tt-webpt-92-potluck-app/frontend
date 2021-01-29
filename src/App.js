import logo from './logo.svg';
import './App.css';
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp"
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
