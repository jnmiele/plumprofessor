import React from 'react'

import DashboardMenu from './DashboardMenu'

class UserDashboard extends React.Component {
	state = {
		currentTab: ''
	}

	render() {
		const projects = [{title: 'My Project', description: 'editing services', status: 'pending'}]
		const formattedProjects = projects.map(p => <div> {p.title} {p.description} {p.status} </div>)
		return (
			<div>
				<DashboardMenu />
				<div className='project-list'>
					{formattedProjects}
				</div>
				<div> placeholder for messages from team </div>
			</div>
		)
	}
}

export default UserDashboard