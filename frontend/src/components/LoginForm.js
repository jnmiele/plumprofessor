import React from 'react'
import { loginUser } from '../actions/users'

class LoginForm extends React.Component {

	state = {
		email: '',
		password: 
	}

	handleLogin = (event) => {
    event.preventDefault()
    const loginParams = {email: this.state.email, password: this.state.password}
    this.props.loginUser(loginParams)
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }  

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

	render() {
		return (
			<form onSubmit={onSubmit}>
				<input type='text' placeholder='email'/>
				<input type='password' placeholder='password'/>
				<input type='submit' value='submit'/>
			</form>
		)
	}
}

export default LoginForm