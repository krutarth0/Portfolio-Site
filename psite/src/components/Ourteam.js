import React from 'react';
import '../static/ourteam.css';
import OurTeamMember from "./OurTeam/OurTeamMember"

const Ourteam = () =>{

    return (
            <div class="all_member">
                    <OurTeamMember
                        url={"https://pbs.twimg.com/profile_images/1286632616796598276/9EN_YQGY_400x400.jpg"}
                        name={"Donna Paulson"}
                        quote={ "I'm too busy being a badass and worrying about my hair"}
                        fb={"#"}
                        twt={"#"}
                        ig={"#"}
                    />
                    <OurTeamMember
                        url={"https://i.pinimg.com/originals/ca/e0/fd/cae0fd88ccc2871f99e422c51c947bdf.jpg"}
                        name={"Harvy Specter"}
                        quote={ "When you are backed against the wall, break the goddamn thing down."}
                        fb={"#"}
                        twt={"#"}
                        ig={"#"}
                    />
                    <OurTeamMember
                        url={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxtSynRwTlqeBnvfEhM4jfJcUrHwULm96pag&usqp=CAU"}
                        name={"Mike Ross"}
                        quote={ "Sometimes I like to hang out with people who aren’t that bright, you know, just to see how the other half lives."}
                        fb={"#"}
                        twt={"#"}
                        ig={"#"}
                    />
            </div>

            
        


    )

}

export default Ourteam;