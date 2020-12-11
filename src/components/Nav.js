import { Link } from 'react-router-dom'

function Nav() {
    return (
        <ul>
            <li> <Link to ="/">About Me</Link></li>
            <li> <Link to ="/skills">My Skills</Link></li>
            <li> <Link to ="/projects">My Projects</Link></li>
            <li> <Link to ="/weather">Weather</Link></li>
            <li> <Link to ="/github">Github</Link></li>
        </ul>
    )
}

export default Nav