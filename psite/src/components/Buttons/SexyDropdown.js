import React from 'react'
import '../../static/Buttons/sexy_dropdown.css'
export default function SexyDropdown(props) {
    return (
    <div class="dropdown">
        {props.size ? 
        <button class="dropbtn" 
            style={{
                width:`${props.size[0]}vw`,
                height:`${props.size[1]}vh`}}>
                Resources</button>
        :<button class="dropbtn" >Resources</button>}
        
        <div class="dropdown-content">
        
        { props.links.map(object => <a href={`/${object.to}`}> {object.name} </a> ) } 

        </div>
    </div>  
        
    )
}
