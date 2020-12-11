import { Link } from 'react-router-dom'

function MyProjects(props) {
    const projects = props.projectList.map((project, index) => {
        return <p key={index}><Link to ={`/projects/${project.id}`}>{project.name}</Link></p>
    })

    return (
        <div>{projects}</div>
    )
}

export default MyProjects