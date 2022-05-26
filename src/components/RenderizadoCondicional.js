import React, { Component } from 'react';

function Login() {
  return (
    <>
      <h3>Login</h3>
    </>
  )
}
function Logout() {
  return (
    <>
      <h3>Logout</h3>
    </>
  )
}

export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: true,
    };
  }

  render() {
    return (
      <>
        <h2>RenderizadoCondicional</h2>
        {this.state.session ? <Login /> : <Logout />}
      </>
    );
  }
}