    import React , {useState ,useEffect} from 'react';
    import '../../static/authentication.css';
    import fire from './firebase';
    // import { admin } from 'firebase-admin/lib/database';




    const SignUp = () =>{

        const [user , setUser] = useState("")

        // const [userName , setUserName] = useState("");
        
        const [email , setUserEmail] = useState("");
        const [emailError , setEmailError] = useState("")

        const [hasAccount , setHasAccount] = useState(false);

        const [password , setUserPassword] = useState("");
        const [passwordError , setPasswordError] = useState("")
        
        const [temp , setTemp] = useState("aa");

        const [id , setUid] = useState('');

        const [data,setData] = useState([]);
        

        const clearInput =  () =>{
            setUserEmail('');
            setUserPassword('');
        }

        const clearError = () =>{
            setEmailError('');
            setPasswordError('');
        }   

        const addNewMember = () =>{
            
     

            console.log("add member",user.uid);
            
            
            fire.firestore().collection("meber_collection").add({   
                    email:email,
                    uid:id,
                    isAdmin:false
            }).then(()=>{
                console.log("suceessfull")
            }).catch((error)=>{
                console.log(error)
            })


        }
        
        const isAdmin = () =>{
            
            const fatchData = async() =>{
                console.log("isadmin",id)
                const db = fire.firestore();
                const xx= await db.collection('meber_collection').get();
                console.log("id=>",id)  
                xx.docs.map(doc => {    
                    console.log("doc id=>",doc.data());
                        
                    if((doc.data().uid)===id){
                        console.log('11')
                        localStorage.setItem("user",doc.data());
                    }
                })

                    // xx.docs.filter(doc=>{
                    
                    // })
            }

            fatchData();
        }


        const login = (e) => {
            clearInput();
            clearError();
            e.preventDefault();
            fire
                .auth()
                .signInWithEmailAndPassword(email,password).then(()=>{
                    isAdmin();
                })
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

        const registerUser = (e) => {
            e.preventDefault();
            clearError();
            clearInput();

            fire
            .auth()
            .createtUserWithEmailAndPassword(email,password).then(()=>{
                    addNewMember();
            })
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
            // console.log("auth")
            fire.auth().onAuthStateChanged(user=>{
                if(user){
                    clearInput();
                    setUser(user);
                    // setId(user.uid);
                    // console.log(user);
                    // console.log(user.uid)
                    let id = user.uid;
                    setUid(id);
                     console.log("id",id);
                    // console.log("uid in auth",id);
                }
                else{
                    console.log(user);
                    setUser("");
                }
            })
        
        }
        
    


        useEffect(() => {   
            
            authListener();
            console.log("id",id)
            // checkAdmin();

        }, [])

    {/* return(

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



        )*/}

        return ( 

        <div className= "main">

        <div className="page-bg">
            <form className="page" >
            
            <label>
                Email::
                    <div>
                        <input className="text-box"  type="email"  value={email} onChange ={e => setUserEmail(e.target.value)} required/>
                    </div>     
            </label>
            
            <label>
                Password:
                <div>
                    <input className="text-box"  type="password"  required value={password} onChange ={e => setUserPassword(e.target.value)}/>
                </div>     
            </label>

            {emailError}{passwordError}
        
            
                <div>

                    {
                        hasAccount ?  
                        <div>
                        <button className="button" type="submit" onClick={login} >Login</button>
                        <p>Don't Have an Account ? <span style={{color:"blue"}}  onClick={()=>setHasAccount((!hasAccount))}> Signup here </span></p>  </div>
                        :
                        <div>
                        <button className="button" type="submit" onClick={registerUser} >SignUp</button>
                        <p> Have an Account ? <span style={{color:"blue"}} onClick={()=>{setHasAccount((!hasAccount)) }}> 
                                                Signin here </span></p>  </div>
                    }

                </div>        

            </form>

            <div>
        </div>

        </div>

        {user.email == null ? "" : <button onClick={handleLogout}>Logout</button> }
        {  temp === "" ?  <h3>Its worling</h3> : ""}

        </div>
            

        )


        

    }






    export default SignUp ;