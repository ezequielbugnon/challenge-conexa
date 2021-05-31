import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Photos from './pages/Photos';
import UserState from './context/userContext/UserState';
import PhotosState from './context/photosContext/PhotosState';
import PrivateRoute from './components/private/PrivateRoute';


function App() {
  return (
    <UserState>
    <PhotosState>
    <Router>
      <Switch>
        <PrivateRoute path="/home" component={Home}/>
        <Route exact path="/signup" component={SignUp}/> 
        <Route exact path="/" component={SignIn}/>
        <PrivateRoute path="/photos" component={Photos}/> 
        <Redirect to="/" />
      </Switch>
    </Router>
    </PhotosState>
    </UserState>
  );
}

export default App;
