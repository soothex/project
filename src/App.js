import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Header } from './components/header/';
import { Auth } from './components/signup';
import { RegistrationComponent } from './components/registry';
import { ProfileComponent } from './components/profile';
import { FriendListComponent } from './components/friendlist/';
import { PhotoComponent } from './components/photo';
import { SettingsComponent } from './components/setteings';

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
        <Route path="/settings/" component={SettingsComponent} />
      </div>
      <Notificationer />
      <Footer />
    </Router>
  );
}

export default AppRouter;
