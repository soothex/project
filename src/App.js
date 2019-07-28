import React from 'react';
import logo from './logo.svg';
import './App.css';

class Logger extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Ваш email: {this.props.email}</p>
        <p>Ваш пароль: {this.props.password}</p>
      </React.Fragment>
    );
  }
}

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      };
  
      this.handleChange = this.handleChange.bind(this);

      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  onChangePassword(event){
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    console.log(event);
  }

  render() {
    return (
    <React.Fragment>
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <img className="mb-4" src={logo} alt="" width="72" height="72"/>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" name="email" placeholder="Email address" required onChange={this.onChangeEmail} />
        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" name="password" placeholder="Password" required  onChange={this.onChangePassword} />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
      </form>
      
      <Logger email={this.state.email} password={this.state.password}/>
    </React.Fragment>
    );
  }
}


export default App;
