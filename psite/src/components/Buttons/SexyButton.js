import React from 'react'
import '../../static/Buttons/sexy_button.css'
export default function SexyButton(props) {
    return (
      <div className="button-holder">

        {props.size ? 
          <a href={props.link &&`/${props.link.split(" ").join("").split("/").join("")}`} 
           className="button"
           onClick={props.onClick}
           style={{
            width:`${props.size[0]}vw`,
            height:`${props.size[1]}vh`}}
          >{props.name}</a>
        : 
        <a href={props.link &&`/${props.link.split(" ").join("").split("/").join("")}`} 
        className="button"
        onClick={props.onClick}
        >{props.name}</a>
        
        }


      </div>
   
    )
}
