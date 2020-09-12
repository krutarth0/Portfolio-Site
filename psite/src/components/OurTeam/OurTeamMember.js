import React from 'react'

export default function OurTeamMember(props) {
  
    return (
        
       
        <div className="member">

                <div className="profile_photo">
                        <img className="photo" src={props.url}></img>
                </div>

                <div className="profile_name" >
                    <span className="name">{props.name}</span>
                </div>

                <div className="profile_info">
                    <span className="info"> 
                   {props.quote}
                    </span>
                </div>
            </div>

        
    )
}
