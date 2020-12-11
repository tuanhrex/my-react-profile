function ProjectDetails(props) {
    return (
        <div>
            <h1> Project Name: {props.project.name} </h1>
            <p>Description: {props.project.description}</p>
            {/* <a ref={props.project.link}>Link</a> */}
            <a target="_blank" href={props.project.link}>Link to Project</a>
        </div>
    )
}

export default ProjectDetails