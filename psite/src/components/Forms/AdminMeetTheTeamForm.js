import React,{useEffect,useState} from 'react'
import Form from 'react-bootstrap/Form'
import SexyButton from "../Buttons/SexyButton"
import ProgressBar from "../Progressbar/Progressbar"
import useStorage from "../../database/useStorage"

export default function MeetTheTeamForm() {
    const [file, setFile] = useState(null);
    const [name, setName] = useState(null);
    const [quote, setQuote] = useState(null);
    const [error, setError] = useState(null);
    const [Upload, setUpload] = useState(false)
    const [Review, setReview] = useState(false)
    const [Reload, setReload] = useState(false)
    const types = ['image/png', 'image/jpeg','image/jpg'];

    const handleChange = (e) => {
      let selected = e.target.files[0];
  
      if (selected && types.includes(selected.type)) {
        setFile(selected);
        setError('');
      } else {
        setFile(null);
        setError('Please select an image file (png or jpg)');
      }
    };

    const handleName = (e) => {
       var  selected = e.target.value
          setName(selected); 
      };

      const handleQuote = (e) => {
        var  selected = e.target.value
           setQuote(selected); 
       };
 

    const handleClickSubmit =(e)=>{
            
            if(name){if(quote){if(file){
                            // console.log("DONE!!");
                            setReload(true)
                            setReview(false)
                            setUpload(true)
                            
                        }
                        else{
                            setError("please select a file!")
                        }
                    }
                    else{
                        setError("please enter a quote!")
                    }
            }
            else{
                setError("Please select a name!")
            }
        
    }

    const handleClickPreview =(e)=>{
            
        if(name){if(quote){if(file){
                        // console.log("DONE!!");
                        setReload(false)
                        setUpload(false)
                        setReview(true)
                        
                        
                    }
                    else{
                        setError("please select a file!")
                    }
                }
                else{
                    setError("please enter a quote!")
                }
        }
        else{
            setError("Please select a name!")
        }
    
}

    return (
        <Form>
            <Form.Control placeholder="Name" size="lg"  onChange={handleName}/><br/>
            <Form.Control as="textarea" rows="3" placeholder="Quote" size="lg"  onChange={handleQuote} /> <br/>
            <Form.File id="profile-image" label="Display Photo" onChange={handleChange}/><br/>
            { error && <div className="error">{ error }</div>}
            { name && quote && file && Upload &&  <ProgressBar file={file} setFile={setFile} name={name} quote={quote} reload={Reload} setReview={setReview}/> }
            { name && quote && file && Review &&  <ProgressBar file={file} setFile={setFile} name={name} quote={quote} reload={Reload} setReview={setReview}/> }
            <div className="submit-preview">
            <SexyButton name={"Submit"} onClick={handleClickSubmit} />
            <SexyButton name={"Preview"}  onClick={handleClickPreview} />   
            </div> 
        </Form>
    )
}
