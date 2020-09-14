import React, { useEffect , useState} from 'react';
import Home from "./containers/home"
import CalanderPage from "./containers/calanderPage"
import Admin from "./components/Admin/admin"
import SignUpIn from "./components/Forms/SignUpIn";
import {Link,Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import {auth} from './database/firebase_config';
import {projectFirestore} from './database/firebase_config';





const  App = ()=> {

  const [isAuthenticated , setIsAuthenticated] = useState(localStorage.getItem('user') ? true : false)
  const [isAdmin, setIsAdmin] = useState(false)

  // const getUser = () =>{
  
        
  //   let user = JSON.parse(localStorage.getItem("user"));
  //   let local_id  = user.uid;    
  //   console.log("user",user);  
  //   console.log(local_id);  
  //   projectFirestore.collection('member_collection').where('uid','==',local_id).get()
  //             .then(snapShot =>{
  //               if(snapShot.empty){
  //                 console.log("no matching string")
  //                 return;
  //               }       
  
  //               console.log(snapShot);
  //               snapShot.forEach((doc)=>{
                  
  //                 console.log(doc.id,'=>',doc.data());
  //                 localStorage.setItem('final_data',JSON.stringify(doc.data()));
  //                 localStorage.setItem('isAdmin',doc.data().isAdmin);
  //               })
                              
  //             })
  //             .catch(err =>{
  //               console.log(err); 
  //             })
  
  // }

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

  return (
    <div className="App">

   
      <Switch>

          <Route exact path="/">
            <Home signOut={handleLogOut} admin={isAdmin} />
          </Route>

          <Route path="/Calander">
            <CalanderPage/>
          </Route>

         <Route path="/Admin">
         {!isAuthenticated ? <Redirect to="/" /> : <Admin/>}
          </Route> 

          <Route path="/SignInup">
          {isAuthenticated ? <Redirect to="/" /> : <SignUpIn/>}
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