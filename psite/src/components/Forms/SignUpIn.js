import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import SexyButton from "../Buttons/SexyButton"
import useAuth from "../../database/useAuth"
import {auth} from "../../database/firebase_config"
import {projectFirestore} from '../../database/firebase_config';
import '../../static/authentication.css';

export default function SignUpIn() {

    
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const [hasAccount,setHasAccount] = useState(false);
    
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

        auth().signInWithEmailAndPassword(email,pass).then(()=>{
            console.log("login Success")
            // getUser();
            
        }).catch((error)=>{
            console.log(error);
        })


        
    }

    const handleSignUp = (e) =>{

        e.preventDefault();

        auth().createUserWithEmailAndPassword(email,pass).then(()=>{
            console.log("success")
            addMember();
            
        }).catch((error)=>{
            console.log(error);
        })
        
        
        // getUser();
        // console.log(localStorage.getItem("uid"));

    }

   

    return (
    <div className="signUp_main">

    

    <Form className="signup_form">
    <div> <span className="signup_label"> Welcome to </span> <br/> <span  className="company_title" >Pramerica</span> </div>
    <label className="signup_label">
        Email:
    </label>
    <Form.Control className="signup_input" type="email" onChange={handleEmail} /><br/>

    <label className="signup_label">
        Password:
    </label>
    
    <Form.Control className="signup_input" type="password"  onChange={handlePass} /> <br/>
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
