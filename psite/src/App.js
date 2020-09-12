import React, { useEffect , useState} from 'react';
import Home from "./containers/home"
import CalanderPage from "./containers/calanderPage"
import Admin from "./components/Admin/admin"
import SignUpIn from "./components/Forms/SignUpIn";
import {Link,Switch,Route} from 'react-router-dom'
import './App.css';
import {auth} from './database/firebase_config';
import {projectFirestore} from './database/firebase_config';





const  App = ()=> {

  const [user , setUser] = useState("")

  

  const handleLogOut = () =>{
      auth().signOut();
      localStorage.removeItem("uid");
      localStorage.removeItem("user");
      localStorage.removeItem("final_data");

  }

useEffect(()=>{
  // getUser();  
  let isAdmin = JSON.parse(localStorage.getItem('final_data'));
  console.log("isAdmin",isAdmin);
  auth().onAuthStateChanged((user)=>{

      if(user){
        // console.log(user.email);
        // console.log(user.uid);
        let id  = user.uid
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("uid",id);
        
      }else{
        console.log("no user is logged in")
        setUser("");
        
      }
  })    
},[])

  return (
    <div className="App">

    {user==="" ? "" : <button onClick={handleLogOut}>Logout</button> }
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Calander">
            <CalanderPage/>
          </Route>
          <Route path="/Admin">
            <Admin/>
          </Route>
          
          <Route path="/SignInup">
          
            <SignUpIn/>
          </Route>
          
      </Switch>
    </div>
  );
}

export default App;



// useEffect(() => {
//   auth().onAuthStateChanged(function (user) {
//     if (user) {
//       // User is signed in.
//       console.log(user.email, user.uid);
//       localStorage.setItem("isAuthenticated", "true");
//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("Theme", "Light");
//       localStorage.setItem('notification-tab',"WorkSpace")
//       setAuth(true);
//     } else {
//       // No user is signed in.
//     }
//   });
// }, []);