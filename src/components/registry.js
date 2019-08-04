import React from 'react';
import logo from './../logo.svg';

import { Notificationer } from './notification';

class Logger extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p class="card-text">Current email: {this.props.email}</p>
        <p class="card-text">Current pwd: {this.props.password}</p>
        <p class="card-text">Saved mail: {this.props.smail}</p>
        <p class="card-text">Saved pwd: {this.props.spwd}</p>
      </React.Fragment>
    );
  }
}

export class RegistrationComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        checkbox: false,
        registration: false,
        notification: false,
        userdata: {
          smail: '',
          spwd: ''
        }
      };

      this.onChangeInputs = this.onChangeInputs.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeInputs(event){
      if(event.target.type === 'checkbox'){
        this.setState({
          [event.target.name]: event.target.checked}
        );
      }
      else{
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    }
    onSubmit(event) {
      event.preventDefault();
      if(this.state.email !== '' && this.state.password !== '' && this.state.registration === false){
        this.setState({
          registration: true,
          userdata:{
            smail: this.state.email,
            spwd: this.state.password,
          }
        });
      }

      if(this.state.userdata.smail === this.state.email && this.state.userdata.spwd === this.state.password){
        this.setState({
          notification: true
        });
      }
    }

  render() {
    return (
    <React.Fragment>
      <form className="form-signin" onSubmit={this.onSubmit}>
        <img className="mb-4" src={logo} alt="" width="72" height="72"/>
        <Notificationer switch={this.state.notification} />
        <h1 className="h3 mb-3 font-weight-normal">Registration</h1>
        
        <div className="form-group">
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required name="email" onChange={this.onChangeInputs} />
        </div>
        <div className="form-group">
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required name="password" onChange={this.onChangeInputs} />
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" name="checkbox" onChange={this.onChangeInputs}/> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
        <p className="mt-5 mb-3 text-muted">&copy; React Network</p>
      </form>
    </React.Fragment>
    );
  }
}

export default RegistrationComponent;