import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Reset from "./Reset";
import Update from "./Update";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={LogIn} />
            <Route path="/reset" component={Reset} />
            <Route path="/update" component={Update} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
