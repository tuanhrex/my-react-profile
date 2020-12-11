import { BrowserRouter, Route} from 'react-router-dom'

import AboutMe from './components/AboutMe'
import Nav from './components/Nav'
import MyProjects from './components/MyProjects'
import ProjectDetails from './components/ProjectDetails'
import MySkills from './components/MySkills'
import Weather from './components/Weather'
import WeatherResults from './components/WeatherResults'
import Github from './components/Github'

import './App.css';

function App() {
  const projectList = [
    {
      name: 'Treasure Grab',
      id: 1,
      description: "HTML-based game where you collect the treasure in the allotted time.",
      link: "https://tuanhrex.github.io/"
    }, {
      name:'Game Tracker',
      id: 2,
      description: "Express based application that searches rawg.io api to pull up video game information and saves game to user list.",
      link: "https://tuanh-game-tracker.herokuapp.com/"
    }]




  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route path="/" exact component={AboutMe} />
        <Route path="/projects" 
          exact 
          render = {() => {return <MyProjects projectList={projectList} />}} 
        />
        <Route 
          path="/projects/:id" 
          render={(routeInfo) => {
            const id = routeInfo.match.params.id
            const targetProject = projectList.find((p) => p.id === parseInt(id))
            return <ProjectDetails project={targetProject}/>
          }} 
        />
        <Route path="/skills" component={MySkills} />
        <Route path="/weather" component={Weather} />
        <Route path="/github" component={Github} />
    
      </div>
      </BrowserRouter>
  );
}

export default App;
