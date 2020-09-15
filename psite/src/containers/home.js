import React from 'react'
import Landing from "../components/landing"
import Ourteam from '../components/Ourteam';
export default function Home(props) {
    return (
        <div className="main">
            <Landing signOut={props.signOut} admin={props.admin} /> 
        </div>
    )
}
