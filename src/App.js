import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Header } from './components/header/';
import { Auth } from './components/signup';
import { RegistrationComponent } from './components/registry';
import { ProfileComponent } from './components/profile';
import { FriendListComponent } from './components/friendlist';
import { PhotoComponent } from './components/photo';

import { Notificationer } from './components/notification';



function Footer(){
  return <p className="float-right"><a href="#">Back to top</a></p>
}

function AppRouter() {
  return (
    <Router>
      <Header />
      <div>
        <Route path="/" exact component={RegistrationComponent} />
        <Route path="/auth/" exact component={Auth} />
        <Route path="/profile/" component={ProfileComponent} />
        <Route path="/friend/" component={FriendListComponent} />
        <Route path="/photo/" component={PhotoComponent} />
      </div>
      <Footer />
    </Router>
  );
}

/*class App extends React.Component {

  render() {
    return (
    <React.Fragment>
      <Auth />
      <RegistrationComponent />
      <FriendListComponent />
      <ProfileComponent />
      <PhotoComponent />
      <Notificationer />
    </React.Fragment>
    );
  }
}*/

export default AppRouter;


/*<HeaderComponent />
<AuthComponent />
<RegistrationComponent />
<ProfileComponent />
<FriendListComponent />
<PhotoComponent /> */