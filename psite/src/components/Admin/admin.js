import React from 'react'
import "../../static/Admin/admin.css"
import MeetTheTeamForm from "../Forms/AdminMeetTheTeamForm"
import OurTeamMember from "../OurTeam/OurTeamMember"
import SexyButton from '../Buttons/SexyButton'
import useFirestore from "../../database/useFirestore"
export default function Admin() {
    const { docs } = useFirestore('ourTeam')

    const { TEMP_doc } = useFirestore('ourTeam','TEMP');
    console.log(docs);
    return (
        <div className="admin-dashboard">
                <div className="admin-heading">
                    <div>
                    <SexyButton link={"/"} name={"Home"}/>
                    </div>
                        <span className="admin-heading-tag">
                                Dashboard
                        </span>
                </div>
                <div className="firebase-ourstory">
                    <div className="admin-form">
                        <div className="meet-the-team-form">
                            <div className="meet-the-team-actual-form">
                              <div className="meet-the-team">
                                 <span>Meet The Team</span>
                              </div>
                                <MeetTheTeamForm/>
                            </div>
                        </div>
                    </div>

                    <div className="current-data">
                     
                                    <div className="preview">
                                    {
                        docs && docs.map(doc=>{if(doc.id =='TEMP'){return <div className="our-tem-admin-member">
                                                <OurTeamMember url={doc.url} name={doc.name} quote={doc.quote}/>
                                            </div>}})}  
                                                
                                       <div style={{textAlign:"center"}}>
                                           PREVIEW
                                       </div>
                            </div>
                    </div>

                </div>

                <div className="our-team-admin">
                    
                    {
                        docs && docs.map(doc=>{
                            if(doc.id !='TEMP'){
                                return <div className="our-tem-admin-member">
                                        <OurTeamMember url={doc.url} name={doc.name} quote={doc.quote}/>
                                       </div>
                                }
                               
                            }
            )
                        }  
                    

                 
                </div>

                <div className="firebase-timeline">
                    <div className="admin-form">
                    <div className="our-story">
                            <span>Our Story</span>
                        </div>
                        <div className="our-story-form">
                            
                        </div>
                    </div>

                    <div className="current-data">

                    </div>
                </div>
        </div>
    )
}
