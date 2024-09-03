import React from 'react';
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/home";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./components/User";
import NotFound from "./components/NotFound";
import AlertState from './context/alert/AlertState';
import GithubState from "./context/github/GithubState";

// process.setMaxListeners(20); // Increase the limit as needed

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar title="Github Finder" icon="fab fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} /> {/* Fixed 'component' prop */}
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
