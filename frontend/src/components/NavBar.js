import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	function onClick(event) {
    if (event.target.dataset.id === "logout") {
      localStorage.removeItem("jwtToken")
      props.history.push('/login')
    }
  }

	return(
    <nav onClick={onClick} className="navbar">
      <div id='first-nav-item'>
       <Link to='/'>Home</Link>
      </div>
      <div className="nav-item">
       <Link to='/projects/new'>New Project</Link>
      </div>
      <div className="nav-item">
       <Link to='/about'>About Us</Link>
      </div>
      {(localStorage.getItem("jwtToken")) ? <div className="nav-item"><Link to="/me">My Profile</Link></div> : <div className="nav-item"><Link to='/login'>Login</Link></div> }
      {(localStorage.getItem("jwtToken")) ? <div className="nav-item"><a data-id='logout' href="">Logout</a></div> : null }
    </nav>
	)
}

export default NavBar