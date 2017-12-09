export function loginUser(params) {
  console.log(params)
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
}

function doLogin(params) {
  return {
    type: 'LOGIN_USER',
    payload: params
  }
}
