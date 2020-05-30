import React, { useState, Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const req = new Request();
    req.json({
      email: this.email,
      password: this.password
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
          alert('Login failed!');
        }
      })
      .catch((error) => {
        alert('Login failed!');
      });

  };

  const LoadingIndicator = props => {
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
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <label>Email</label>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <label>Password</label>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}


export default LoginPage;