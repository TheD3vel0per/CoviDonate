import React, { useState, Component} from "react";
import  { Redirect } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./styles/Login.css";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  }

  validateForm = () => {
    return this.state.length > 0 && this.state.password.length > 0;
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const req = new Request('/api/auth');
    req.json({
      email: this.state.email,
      password: this.state.password
    });
    fetch('/api/auth', req)
      .then(async (result) => {
        const data = await result.json();
        if (data['token'] != undefined) {
          localStorage.setItem('token', data['token']);
          const tokenData = JSON.parse(atob(data['token'].split('.')[1]));

          localStorage.setItem('_id', tokenData['_id']);
          localStorage.setItem('name', tokenData['name']);
          localStorage.setItem('email', tokenData['email']);
        } else {
          alert('Login failed!')
        }
      })
      .catch((error) => {
        alert('Login failed!');
      });
  }

  handleSubmitDummy = (event) => {
    console.log('DEBUG: Using dummy tokens...');
          
    localStorage.setItem('_id', "DUMMY_ID12345");
    localStorage.setItem('name', "John Doe");
    localStorage.setItem('email', "john@doe.nut");
  }

  LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker();

    return promiseInProgress &&
      (
        <>
          <h1>Hey some async call in progress ! </h1>
          <div
            style={{
              width: "100%",
              height: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>

            <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
          </div>
        </>
      );
  }

  render()
  {
    if (localStorage.getItem('name'))
      return <Redirect to="/"/>
    else
      return (
        <div className="Login">
          <form onSubmit={this.handleSubmitDummy}>
            <FormGroup controlId="email" bsSize="large">
              <label>Email</label>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={e => this.setState({email: e.target.value})}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <label>Password</label>
              <FormControl
                value={this.state.password}
                onChange={e => this.setState({password: e.target.value})}
                type="password"
              />
            </FormGroup>
            <Button block bsSize="large" disabled={!this.validateForm} type="submit">
              Login
            </Button>
          </form>
        </div>
      );
  }
}

export default LoginPage;
