import React from 'react'

const LoginForm = () => {

	onSubmit = (event) => {
		event.preventDefault()
		
	}

	return (
		<form>
			<input type='text' placeholder='email'/>
			<input type='password' placeholder='password'/>
			<input type='submit' value='submit'/>
		</form>
	)
}

export default LoginForm