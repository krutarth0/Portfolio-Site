import React from 'react';
import '../static/ourteam.css';

const Ourteam = () =>{

    return (

        <div className="our-team">

            <div class="all_member">

                    <div className="member">

                            <div className="profile_photo">
                                    <img className="photo" src="https://pbs.twimg.com/profile_images/1286632616796598276/9EN_YQGY_400x400.jpg"></img>
                            </div>

                            <div className="profile_name" >
                                <span className="name"> Donna Paulson    </span>
                            </div>

                            <div className="profile_info">
                                <span className="info"> 
                                I'm too busy being a badass and worrying about my hair.
                                </span>
                            </div>
                    </div>

                    <div className="member" >
                            <div className="profile_photo">
                                <img className="photo" src="https://i.pinimg.com/originals/ca/e0/fd/cae0fd88ccc2871f99e422c51c947bdf.jpg"></img>
                            </div>

                            <div className="profile_name">
                                     <span className="name"> Harvy Specter    </span>
                            </div>

                            <div className="profile_info">

                                 <span className="info">
                                 When you are backed against the wall, break the goddamn thing down.
                                 </span>
                            </div>

                    </div>

                    <div className="member">

                        <div className="profile_photo">
                            <img className="photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxtSynRwTlqeBnvfEhM4jfJcUrHwULm96pag&usqp=CAU"></img>
                        </div>

                        <div className="profile_name">
                            <span className="name"> Mike Ross    </span>
                        </div>

                        <div className="profile_info">
                              <span className="info">
                              Sometimes I like to hang out with people who aren’t that bright, you know, just to see how the other half lives.
                              </span>
                        </div>

                    </div>

            </div>

            
        </div>


    )

}

export default Ourteam;