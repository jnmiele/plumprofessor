export function loginUser(userParams) {
  const body = JSON.stringify(userParams)
  return function(dispatch) {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: body
    })
    .then(res => res.json())
    .then(res => dispatch(doLogin(res)))
    .then(res => {
      {res.payload.jwt? localStorage.setItem('jwtToken', res.payload.jwt):null}
    })
  }
}

function doLogin(params) {
  return {
    type: 'LOGIN_USER',
    payload: params
  }
}
