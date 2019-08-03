import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Header } from './components/header/';
import { Auth } from './components/signup';
import { RegistrationComponent } from './components/registry';
import { ProfileComponent } from './components/profile';
import { FriendListComponent } from './components/friendlist';
import { PhotoComponent } from './components/photo';

import { Notificationer } from './components/notification';

class App extends React.Component {

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
}

export default App;


/*<HeaderComponent />
<AuthComponent />
<RegistrationComponent />
<ProfileComponent />
<FriendListComponent />
<PhotoComponent /> */