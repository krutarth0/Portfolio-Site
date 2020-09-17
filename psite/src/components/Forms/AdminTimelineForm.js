import React from 'react'
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form'
import useFirestore,{postFirestore} from "../../database/useFirestore"

export default function AdminTimelineForm() {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        
                            postFirestore({collection:"Timeline",data:data})
                           
                        }
    return (
        
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Control type="date" placeholder="date" size="lg" ref={register} name="date"/><br/>

            <Form.Control placeholder="Title" size="lg" ref={register} name="title"/> <br/>

            <Form.Control as="textarea" rows="10" placeholder="Info" size="lg" ref={register} name="info"/> <br/>

            { errors && <div className="error">{ errors[0] }</div>}
            
            <div className="submit-preview">
            <input type="submit" />
            
            </div> 
        </Form>
        
    )
}
