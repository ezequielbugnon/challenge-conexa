import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
            <Home/>
        </Route>
        <Route exact path="/">
            <SignIn/>
        </Route>
        <Route path="/signup">
            <SignUp/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
