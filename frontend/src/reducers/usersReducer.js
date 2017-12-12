function usersReducer(state = {}, action) {
	switch (action.type) {
		case 'LOGIN_USER':
			state = {
				user: action.payload.user,
				jwt: action.payload.jwt
			}
			return state
		default:
			return state
	}
}

export default usersReducer
