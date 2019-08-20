import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';


//import { Header } from './components/header/';
import { Auth } from './components/signup';
import { RegistrationComponent } from './components/registry';
import { ProfileComponent } from './components/profile';
import { FriendListComponent } from './components/friendlist/';
import { PhotoComponent } from './components/photo';
import { SettingsComponent } from './components/setteings';

import { Footer } from './components/footer';

import { Notificationer } from './components/notification';


export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAuth: true,
    }

    this.HandlerURL = this.HandlerURL.bind(this);
  };

  HandlerURL = (event) => { this.props.ChangePage(event.target.name); }

  render() {
      return (
          <Router>
          <ul className="nav justify-content-center">
              <li class="nav-item">
                  <Link to='/' className="nav-link" name="homepage" onClick={this.HandlerURL}>Registration</Link>
              </li>
              <li class="nav-item">
                  <Link to='/auth' className="nav-link" name="authpage" onClick={this.HandlerURL}>Auth</Link>
              </li>
              <li className="nav-item">
                  <Link to='/profile' className="nav-link" name="profilepage" onClick={this.HandlerURL}>My profile</Link>
              </li>
              <li class="nav-item">
                  <Link to='/friend' className="nav-link" name="friendpage" onClick={this.HandlerURL}>Friends</Link>
              </li>
              <li class="nav-item">
                  <Link to='/photo' className="nav-link" name="photospage" onClick={this.HandlerURL}>Photos</Link>
              </li>
              <li class="nav-item">
                  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Messages <span className="commingsoon">comming soon</span></a>
              </li>
              <li class="nav-item">
                  <Link to='/settings' className="nav-link">Settings</Link>
              </li>
              <li class="nav-item">
                  <Link to='/auth' className="nav-link">Exit</Link>
              </li>
          </ul>
          </Router>
      )
  }
}


function HandleContent(props){
  if (props.switchAuth === false){
    
    alert('HandleContent: ' + props.setPage);
    if(props.setPage === 'homepage') {
      return (
        <Router>
          <Route path="/" exact component={RegistrationComponent} />
        </Router>
      );
    }

    if(props.setPage === 'authpage') {
      return (
        <Router>
          <Route path="/auth" component={Auth} />
        </Router>
      );
    }

  }
  else
  {
    return (
      <Router>
        <Route path="/profile/" component={ProfileComponent} />
        <Route path="/friend/" component={FriendListComponent} />
        <Route path="/photo/" component={PhotoComponent} />
        <Route path="/settings/" component={SettingsComponent} />
      </Router>
    )
  }
}

export class AppRouter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userAuth: true,
      selectPage: 'homepage',
    }

    this.currentPage = this.currentPage.bind(this);
  };

  currentPage(value){
    this.setState(state => ({
      selectPage: value
    }));
    alert('AppRouter: ' + this.state.selectPage);
  }

  render() {
    return (
      <React.Fragment> 
          <Header ChangePage={this.currentPage} />
          <HandleContent switchAuth={this.state.userAuth} currentPage={this.state.selectPage}/>
          <Notificationer />
          <Footer Store={this.props.Store}/>
      </React.Fragment>
    );
  }
}
