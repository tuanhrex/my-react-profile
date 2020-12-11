import React from 'react'
import Github from './Github'

function GithubResults(props) {

    return (
        <div>
            <p>Name: {props.github.name}</p>
            <p>Username: {props.github.login}</p>
            <p>Location: {props.github.location}</p>
            <p>Bio: {props.github.bio}</p>
        </div>
    )
}

export default GithubResults