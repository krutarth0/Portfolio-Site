import React ,{useEffect,useState} from 'react'
import "../static/landing.css"

export default function Landing(props) {

const [Yoffset, setYoffset] = useState(0);

var handleScroll = ()=> setYoffset(window.pageYOffset)

useEffect(() => {

    window.addEventListener("scroll",handleScroll);
    
    return () => window.removeEventListener("scroll",handleScroll);

}, [])

{
    return (
        

        <div  className="jumbotron" >
            
    
            <h1 
            className="brandname"
            style={{ transform:`translate(${Yoffset*1.1}px,${Yoffset*1.1}px)`  }}
            
            >Pramerica</h1>
            <img 
                className="buildings"  
                src={require("../static/images/onlybuildings.png")} 
                alt=""
                style={{transform:`translateY(${-Yoffset*1.2}px)`}}
                />


        </div>
    )
} }
