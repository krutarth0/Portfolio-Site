import React, { useEffect , useState} from 'react';
import Home from "./containers/home"
import CalenderPage from "./containers/calenderPage"
import Admin from "./components/Admin/admin"
import SignUpIn from "./components/Forms/SignUpIn";
import {Link,Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import {auth} from './database/firebase_config';
import {projectFirestore} from './database/firebase_config';





const  App = ()=> {

  const [isAuthenticated , setIsAuthenticated] = useState(localStorage.getItem('user') ? true : false)
  const [isAdmin, setIsAdmin] = useState(false)

  const handleLogOut = () =>{
      window.location.reload()
      auth().signOut();
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("user");
      // localStorage.removeItem("final_data");
  }

useEffect(()=>{
  // getUser();  
  // let isAdmin = JSON.parse(localStorage.getItem('final_data'));
  // console.log("isAdmin",isAdmin);
  auth().onAuthStateChanged((user)=>{
      if(user){
        // console.log(user.email);
        // console.log(user.uid);
        // let id  = user.uid
        localStorage.setItem("user", JSON.stringify(user));
        // localStorage.setItem("uid",id);
        // getUser();
        setIsAuthenticated(true);
        setIsAdmin(localStorage.getItem('isAdmin'))
        
        
      }
  })    
},[])


const setADMIN = (data)=>{
  setIsAdmin(data)
  window.location.reload()
}
  console.log("APP.JS" + isAdmin);
  return (
    <div className="App">

   
      <Switch>

          <Route exact path="/">
            <Home signOut={handleLogOut} admin={isAdmin}/>
          </Route>

          <Route exact path="/Calender">
            <CalenderPage/>
          </Route>

         <Route exact path="/Admin/">
         {!isAuthenticated ? <Redirect to="/" /> : <Admin/>}
          </Route> 

          <Route exact path="/SignInup/">
          {isAuthenticated ? <Redirect to="/" /> : <SignUpIn setIsAdmin={setADMIN}/>}
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