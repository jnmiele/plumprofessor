import React from 'react';

import { connect } from 'react-redux';
import UserDashboard from './UserDashboard'
import { loginUser } from '../actions/users';

class LoginForm extends React.Component {

	state = {
		email: '',
		password: '',
		loggedIn: localStorage.getItem('jwtToken')? true:false
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
		if (this.state.loggedIn) {
			return (
				<UserDashboard />
			)
		}
		return (
			<form onSubmit={this.handleLogin}>
				<input type='text' value={this.state.email} placeholder='email' onChange={this.handleEmailChange} required='true'/>
				<input type='password' value={this.state.password} placeholder='password' onChange={this.handlePasswordChange} required='true'/>
				<input type='submit' value='submit'/>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loginUser: (loginParams) => {
			dispatch(loginUser(loginParams));
		}
	}
}

function mapStateToProps(state) {
	return {
		user: state.users.user
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
