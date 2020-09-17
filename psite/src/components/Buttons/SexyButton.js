import React from 'react'
import '../../static/Buttons/sexy_button.css'
export default function SexyButton(props) {

    var size = props.size && {
      width:`${props.size[0]}vw`,
      height:`${props.size[1]}vh`
    }

      var backgroundColor = props.transparent && {
        backgroundColor:`${props.transparent ? "transparent" : null}`
      }

      var color = props.color && {
        color : `${props.color ? props.color : null}`
      }

    return (
      <div className="button-holder">

       
          <a href={props.link &&`#/${props.link.split(" ").join("").split("/").join("")}`} 
           class="sexy-button"
           style={{
             ...size,...backgroundColor,...color     
          }}
          >{props.name}</a>
        
       
        
      </div>
   
    )
}
