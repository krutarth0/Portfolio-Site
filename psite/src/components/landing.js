    import React ,{useEffect,useState} from 'react'
    import "../static/landing.css"
    import ContactUS from "./contactUS"

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
            {console.log(Yoffset)}


            <div className="list_div">
                <ul className="list">
                    <li>option 1</li>
                    <li>option 2</li>
                </ul>  
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
                        <h1 className="vision-text-heading">Robust Vision for any start up</h1>
                        <span className="vision-text-data">
                        "Neque porro quisquam est qui dolorem ipsum <br/>
                        quia dolor sit amet, consectetur, adipisci velit..."<br/>
                        " There is no one who loves pain itself, who seeks after <br/>
                        it and wants to have it, simply because it is pain..."
                        </span>
    
                    </div>

                    
                    </div>                    
                    <div className="sampark">
                            <ContactUS/>
                    </div>
            </div>
        )
    } }
