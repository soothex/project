import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Notificationer } from './components/notification';

function SayCheck(props) {
  if(props.checkbox) {
    return <p class="card-text">You asked to remind your data.</p>;
  }
  if(!props.checkbox){
    return <p class="card-text">You asked not to keep your data.</p>;
  }
}

function Switcher(props){
  if(props.tag === 'h1'){
    if(props.switch) {
      return (<h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>);
    }
    else return (<h1 className="h3 mb-3 font-weight-normal">Log In</h1>);
  }
  else{
    if(props.switch) {
      return (<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>);
    }
    else return (<button className="btn btn-lg btn-primary btn-block" type="submit">Log In</button>);
  }
}

/*function Notificationer(props){
  if(props.switch){
    return <div class="alert alert-success" role="alert">Successful authentication</div>;
  }
  else return null
}*/

class Logger extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p class="card-text">Current email: {this.props.email}</p>
        <p class="card-text">Current pwd: {this.props.password}</p>
        <p class="card-text">Saved mail: {this.props.smail}</p>
        <p class="card-text">Saved pwd: {this.props.spwd}</p>
        <SayCheck checkbox={this.props.checkbox} />
      </React.Fragment>
    );
  }
}

class App extends React.Component {
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
        <Switcher switch={this.state.registration} tag='h1'/>
        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required name="email" onChange={this.onChangeInputs} />
        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required name="password" onChange={this.onChangeInputs} />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" name="checkbox" onChange={this.onChangeInputs}/> Remember me
          </label>
        </div>
        <Switcher switch={this.state.registration} tag='button'/>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
      </form>
      <div class="card">
        <h5 class="card-header">Input logs</h5>
        <div class="card-body">
          <h5 class="card-title">Input processing history</h5>
          <Logger email={this.state.email} password={this.state.password} checkbox={this.state.checkbox} smail={this.state.userdata.smail} spwd={this.state.userdata.spwd}/>
        </div>
      </div>
    </React.Fragment>
    );
  }
}


export default App;
