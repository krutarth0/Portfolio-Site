import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import SexyButton from "../Buttons/SexyButton"
import useAuth from "../../database/useAuth"
import {auth} from "../../database/firebase_config"
import {projectFirestore} from '../../database/firebase_config';
import '../../static/authentication.css';
import {Link} from "react-router-dom";

export default function SignUpIn() {

    

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

    // const getUser = () =>{
  
        
    //     let user = JSON.parse(localStorage.getItem("user"));
    //     // let local_id  = user.uid;    
    //     console.log("user",user);  
    //     // console.log(local_id);  
    //     let db = projectFirestore.collection('member_collection').where('uid','==',123).get()
    //               .then(snapShot =>{
    //                 if(snapShot.empty){
    //                   console.log("no    matching string")
    //                   return;
    //                 }       
      
    //                 console.log(snapShot);
    //                 snapShot.forEach((doc)=>{
                      
    //                   console.log(doc.id,'=>',doc.data());
    //                   localStorage.setItem('final_data',JSON.stringify(doc.data()));
    //                 })
                                  
    //               })
    //               .catch(err =>{
    //                 console.log(err); 
    //               })
      
    //   }

    const addMember = () => {
        auth().onAuthStateChanged((user)=>{

            if(user){
            //   console.log(user.email);
            //   console.log(user.uid);
            //   localStorage.setItem("user", JSON.stringify(user));
            let id = user.uid;
            projectFirestore.collection("member_collection").add({
                email:email,
                uid:id,
                isAdmin:false
            })

            }else{
              console.log("ERROR")
            }
        })
    }


    const handleLogin = (e) => {
        e.preventDefault();

        clearInput();
        clearError();   
        
        auth().signInWithEmailAndPassword(email,pass).then(()=>{
            console.log("login Success")
            // getUser();
            
        })
        .catch((error)=>{
            switch(error.code){
                case "auth/invalid-email":
                    case "auth/user-disabled":
                        case "auth/user-not-found":
                            console.log(error)
                            setEmailError("Invalid Email.! Please Try again")
                            break
                            case "auth/wrong-password":
                                setPasswordError("Incorrect Password.! Please Try again");
                                console.log(error.message)
            }
        })


        
    }

    const handleSignUp = (e) =>{

        e.preventDefault();

        auth().createUserWithEmailAndPassword(email,pass).then(()=>{
            console.log("success")
            addMember();
            
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
        
        
        // getUser();
        // console.log(localStorage.getItem("uid"));

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
    <Form.Control className="signup_input" type="email" onChange={handleEmail} /><br/>

    <label className="signup_label">
        Password:
    </label>
    
    <Form.Control className="signup_input" type="password"  onChange={handlePass} /> <br/>
    
    <span style={{color:"red"}}> {emailError} {passwordError} </span>

    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
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
    </Link>
        </Form>

    </div>
   
   )
}
