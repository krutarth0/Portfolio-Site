import React, { useEffect , useState} from 'react';
import Home from "./containers/home"
import CalenderPage from "./containers/calenderPage"
import Admin from "./components/Admin/admin"
import SignUpIn from "./components/Forms/SignUpIn";
import {Link,Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import {auth} from './database/firebase_config';
import {projectFirestore} from './database/firebase_config';
import Timeline from './components/Timeline';




const  App = (props)=> {

  const [isAuthenticated , setIsAuthenticated] = useState(localStorage.getItem('user') ? true : false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [Reload, setReload] = useState(false)

  const handleLogOut = () =>{
    console.log("handleing logout")
      window.location.reload()
      auth().signOut();
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("user");
      
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

const ReloadCallback = ()=>{
  // setReload(true)
  setTimeout(() => {
    window.location.reload()
  }, 10);
  
}
const setADMIN = (data)=>{
  setIsAdmin(data)
  window.location.reload()
}
  console.log("APP.JS" + isAdmin);
  return (
    <div className="App">

   
      <Switch>

          <Route exact path="/">
            <Home signOut={handleLogOut} admin={isAdmin} ReloadCallback={ReloadCallback}/>
          </Route>

          <Route exact path="/Calender">
            <CalenderPage ReloadCallback={ReloadCallback}/>
          </Route>

         <Route exact path="/Admin/">
         {!isAuthenticated ? <Redirect to="/" /> : <Admin ReloadCallback={ReloadCallback}/>}
          </Route> 

          <Route exact path="/signupin/">
          {isAuthenticated ? <Redirect to="/" /> : <SignUpIn setIsAdmin={setADMIN} ReloadCallback={ReloadCallback}/>}
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