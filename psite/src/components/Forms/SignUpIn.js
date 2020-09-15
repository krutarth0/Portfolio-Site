import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import SexyButton from "../Buttons/SexyButton"
import {auth} from "../../database/firebase_config"
import {projectFirestore} from '../../database/firebase_config';
import {Redirect} from 'react-router-dom'
import '../../static/authentication.css';
import {Link} from "react-router-dom";

export default function SignUpIn(props) {

    

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const [hasAccount,setHasAccount] = useState(false);

    const [emailError , setEmailError] = useState("")
    const [passwordError , setPasswordError] = useState("")

    const clearInput =  () =>{
        setEmail('');
        setPass('');
    }

    const clearError = () =>{
        setEmailError('');
        setPasswordError('');
    }   

    const handleEmail = (e) =>{ 
        setEmail(e.target.value)
    }   
    const handlePass = (e) =>{
        setPass(e.target.value)
    }
    async function SetLocal(doc,user){
        let promise = new Promise((resolve,reject)=>{
            localStorage.setItem('isAdmin',doc.data().isAdmin);
        })

        let wait = await promise;
        localStorage.setItem("user", JSON.stringify(user.user));
    } 

    const handleLogin = (e) => {
        auth().signInWithEmailAndPassword(email,pass).then((user)=>{
            // console.log("login Success",user.user.email)
            
            projectFirestore.collection('member_collection')
            .where('uid','==',user.user.uid)
            .get()
            .then( (snap)=>
            {
                snap.forEach((doc)=>{
                    SetLocal(doc,user)
                    props.setIsAdmin(doc.data().isAdmin)
                  })


            }
            )
        }).catch((error)=>{
            console.log(error);
        })
   
    }

    const handleSignUp = (e) =>{
        auth().createUserWithEmailAndPassword(email,pass).then((user)=>{
            projectFirestore.collection("member_collection").add({
                email:user.user.email,
                uid:user.user.uid,
                isAdmin:false
            })
            localStorage.setItem("user", JSON.stringify(user.user));
        }).catch((error)=>{
            switch(error.code){
                case "auth/email-already-in-use":
                    setEmailError("Email is aready in use.Try other email address")
                    break;
                    case "auth/invalid-email":
                            setEmailError("Invalid Email.")
                            break
                            case "auth/weak-password":
                                setPasswordError("Password must be greater then 6 character");
                                
            }
        })
        // window.location.reload()
    }


    return (
    <div className="signUp_main">

    

    <Form className="signup_form">
    <div> <span className="signup_label"> Welcome to </span> <br/> 
            <Link to = "/">
            <span  className="company_title" >Pramerica</span>
            </Link>
            </div>
    <label className="signup_label">
        Email:
    </label>
    <Form.Control className="signup_input" type="email" size="lg" onChange={handleEmail} /><br/>

    <label className="signup_label">
        Password:
    </label>
    
    <Form.Control className="signup_input" type="password" size="lg" onChange={handlePass} /> <br/>
    <div className="submit-preview">
    {
        hasAccount ?
        <div> 
        <SexyButton name={"login"} onClick={handleLogin}/>
        <p style={{fontFamily:"'Cabin', sans-serif" , paddingTop:"3px"}}>Don't have an account?<span className="option" style={{color:'blue' }} onClick={()=>{setHasAccount((!hasAccount)) }}> click here </span> to signup</p>
        </div>
        :
        <div >
        <SexyButton name={"signup"} onClick={handleSignUp} />
        <p style={{fontFamily:"'Cabin', sans-serif" , paddingTop:"3px"  }} > Have an account? <span className="option" style={{color:'blue' }}  onClick={()=>{setHasAccount((!hasAccount)) }}>Click Here </span> to login.!</p>
        </div>
    }       
    </div> 
    
        </Form>

    </div>
   
   )
}
