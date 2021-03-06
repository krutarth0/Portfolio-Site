    import React ,{useEffect,useState} from 'react'
    import "../static/landing.css"
    import ContactUS from "./contactUS"
    import Ourteam from './Ourteam';
    import Timeline from './Timeline'
    import SexyButton from './Buttons/SexyButton'
    import SexyDropdown from './Buttons/SexyDropdown'
    import useFirestore from "../database/useFirestore"
    import {Link} from 'react-router-dom'
    
    // import ourStory from './Timeline';
    
    
    export default function Landing(props) {

    const [Yoffset, setYoffset] = useState(0);
    const [isAdmin , setIsAdmin] = useState(JSON.parse(localStorage.getItem("isAdmin")));
    const timeline_docs  = useFirestore({collection:'Timeline',OrderBycreatedAt:true,order:"asc"})

    var handleScroll = ()=> setYoffset(window.pageYOffset)

    useEffect(() => {

        window.addEventListener("scroll",handleScroll);
        // setIsAdmin(JSON.parse(localStorage.getItem("isAdmin")));
        return () => window.removeEventListener("scroll",handleScroll);

    }, [])

    {
        return (

            

            <div  className="jumbotron" >
            {/* {console.log(Yoffset)} */}
            {console.log(isAdmin)}

            <div className="list_div">
                <div className="list">
            {/*}     <SexyDropdown 
                        prop={"Resources"} 
                        links={
                            props.admin ? [{to:"Calender",name:"Calender"},{to:"#",name:"Forum"},{to:"Admin",name:"Admin"}] :
                            [{to:"Calender",name:"Calender"},{to:"#",name:"Forum"}] 
                        
                        }/>  */}
                    
           
                <Link to = '/admin'>
                    {localStorage.getItem('isAdmin') ? <SexyButton  transparent={true} color={"black"}  name={"Admin"}/>  : ""} 
                    
                </Link>
                

               
               {/* <SexyButton  color={"black"} link={"contact_us"} transparent={true} name={"Our Story"}/>   */}               

                <Link to = '/calender'>
                    <SexyButton  color={"black"} transparent={true} name={"Calender"}/> 
                </Link>
                    
                    
                        
                    { localStorage.getItem("user") == null 
                    ?  
                        <SexyButton color={"black"} transparent={true} link={"signupin"} name={"Sign In/up"}/>      
                    : 
                        <SexyButton color={"black"} transparent={true} name={"Logout"} onClick={props.signOut}/>
                    
                    }

                </div>  
            
            </div>
        
            
            
            <h1 
                className="brandname"
                style={{
                    
                    transform:`translate(${ Yoffset < 800 ?Yoffset*1.1 :850}px,${Yoffset < 850 ?Yoffset:850-Yoffset*0.001}px)`,
                    fontSize:`${ (200 - (Yoffset*0.9/1.5)) < 100 ? 100 :(200 - (Yoffset*0.9/1.5))  }px` }}
                
                >Pramerica</h1>
                <img 
                    className="buildings"  
                    src={require("../static/images/onlybuildings311.png")} 
                    alt=""
                    style={{transform:`translateY(${-Yoffset*0.01}px)`}}
                    />

                    <div className="vision-container">
                        <img 
                        className="vision-image"
                        src={require("../static/images/vision2.png")} 
                        alt=""
                    
                        />

                    <div className="vision-text">
                        <h1 className="vision-text-heading">Robust Vision for your startup</h1>
                        <span className="vision-text-data">
                        <span className="vision-text-data-head">Neque porro quisquam dolorem</span>  <br/><br/>
                       <span className="vision-text-data-info">Quia dolor sit amet, consectetur, adipisci velit <br/>
                        it and wants to have it, simply because it is pain...</span> 
                        </span>
    
                    </div>

                    
                    </div>  

                    <Ourteam></Ourteam>
                    
                    <Timeline docs={timeline_docs}/>

                    <ContactUS></ContactUS>
                    <div className="Footer">
                            <div className="copyright-mark">
                                    Made by <span className="weighted"> Developers.</span> All rights reserved
                            </div>

                            <div className="logos_and_links">
                                    <div className="logos_">
                                        <svg 
                                            aria-hidden="true" 
                                            focusable="false" 
                                            data-prefix="fab" 
                                            data-icon="facebook-f" 
                                            class="fb svg-inline--fa fa-facebook-f fa-w-10" 
                                            role="img" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 320 512">
                                                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                                        <svg 
                                            aria-hidden="true" 
                                            focusable="false" 
                                            data-prefix="fab" 
                                            data-icon="twitter" 
                                            class="twt svg-inline--fa fa-twitter fa-w-16" 
                                            role="img" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                        <svg 
                                            aria-hidden="true" 
                                            focusable="false" 
                                            data-prefix="fab" 
                                            data-icon="instagram" 
                                            class="ig svg-inline--fa fa-instagram fa-w-14" 
                                            role="img" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                    </div>

                                    <div className="links_">
                                            <div>Contact</div>
                                            <div>About us</div>
                                            <div>FAQs</div>
                                            <div>Support</div>
                                    </div>

                            </div>
                            
                    
                    </div>
                    
            </div>

            
        )
    } }
