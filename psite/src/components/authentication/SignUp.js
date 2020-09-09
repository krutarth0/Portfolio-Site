import React , {useState ,useEffect} from 'react';
import '../../static/authentication.css';
import fire from './firebase';




const SignUp = () =>{

    const [user , setUser] = useState("")

    const [userName , setUserName] = useState("");
    
    const [email , setUserEmail] = useState("");
    const [emailError , setEmailError] = useState("")

    const [password , setUserPassword] = useState("");
    const [passwordError , setPasswordError] = useState("")

    const [hasAccound , setHasAccount] = useState(false);

    


    const login = () => {
        fire
            .auth()
            .signInWithEmailAndPassword(email,password)
            .catch((error)=>{
                switch(error.code){
                    case "auth/invalid-email":
                        case "auth/user-disabled":
                            case "auth/user-not-found":
                                console.log(error)
                                setEmailError(error.message)
                                
                                break
                                case "auth/wrong-password":
                                    setPasswordError(error.message);
                                    console.log(error.message)
                }
            })

            console.log("Succesfull")
           
    
        
    }

    const registerUser = () => {
    
        fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch((error)=>{
            switch(error.code){
                case "auth/email-already-in-use":
                    case "auth/invalid-email":
                            console.log(error)
                            setEmailError(error.message)
                            
                            break
                            case "auth/weak-password":
                                setPasswordError(error.message);
                                console.log(error.message)
            }
        })

    }

    const handleLogout  = () =>{
        fire.auth().signOut();
    }



    const authListener = () =>{

        fire.auth().onAuthStateChanged(user=>{
            if(user){
                setUserName(user);
                console.log(user.email)
            }
            else{
                setUserName("");
            }
        })
    
    }  


    useEffect(() => {   
        authListener();
       
    }, [])

    return(

        <div className="container">

            <div className="signup">

                    <input type="text" placeholder="username" value={userName} onChange ={e => setUserName(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange ={e => setUserEmail(e.target.value)} />
                    <input type="password" placeholder="password" value={password} onChange ={e => setUserPassword(e.target.value)} />
                    
                    <button onClick={registerUser}>Submit</button>
                    <br></br>
                   

                    <div>
                    {emailError}{passwordError}
                    </div>
            </div>
            
        

            <div className="signin">
                <input type="email" placeholder="Email" value={email} onChange ={e => setUserEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange ={e => setUserPassword(e.target.value)} />
                <button onClick={login}>Submit</button>

                { user!="" ? <button onClick={handleLogout}>logout</button> : ""}
            </div>  

        </div>



    )


// const  signUp = () =>{

//     try{
//         firebase.login(email,password) 
//     }
//     catch{
//         alert(error.message)
//     }

// }    

}






export default SignUp ;