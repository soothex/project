import React from 'react';
import logo from './logo.svg';
import './App.css';


function SayCheck(props) {
  if(props.checkbox) {
    return <p>Вы вас запомнить.</p>;
  }
  if(!props.checkbox){
    return <p>Вы просили не запоминать вас.</p>;
  }
}

class Logger extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Ваш email: {this.props.email}</p>
        <p>Ваш пароль: {this.props.password}</p>
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
        checkbox: false
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
    }

  render() {
    return (
    <React.Fragment>
      <form className="form-signin" onSubmit={this.onSubmit}>
        <img className="mb-4" src={logo} alt="" width="72" height="72"/>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required name="email" onChange={this.onChangeInputs} />
        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required name="password" onChange={this.onChangeInputs} />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" name="checkbox" onChange={this.onChangeInputs}/> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
      </form>
      
      <Logger email={this.state.email} password={this.state.password} checkbox={this.state.checkbox}/>
    </React.Fragment>
    );
  }
}


export default App;
