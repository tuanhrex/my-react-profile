import React, { useState } from 'react'
import axios from 'axios'
import WeatherResults from './WeatherResults';
import GithubResults from './GithubResults'

function Github() {
    const [user, setUser] = useState('');
    const [github, setGithub] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = `https://api.github.com/users/${user}`
        axios.get(url)
        .then(result => {
            setGithub(result.data)
        })
        .catch(err => {
            console.log(err);
        })
    }


    return (
        <div>
           <form onSubmit={handleSubmit}>
                <h1>Find a Github profile</h1>
                {github ? <GithubResults github={github} /> : null}
                <label htmlFor='user'>Username: </label>
                <input type="text" name="user" id="user" onChange={e => setUser(e.target.value)}/>
                <input type="submit" value="Find"/>
           </form>
        </div>
    )
}

export default Github