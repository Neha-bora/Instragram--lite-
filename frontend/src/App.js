import React from 'react';
import NavBar from './component/navbar';

import {  BrowserRouter , Route} from "react-router-dom"
import Home from './component/screen/Home';
import Signin from './component/screen/Signin';
import Signup from './component/screen/Signup';
import Profile from './component/screen/Profile';
import CreatePost from './component/screen/CreatePost';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Route exact path="/"><Home/></Route>

    <Route path="/signin"><Signin/></Route>

    <Route path="/signup"><Signup/></Route>

    <Route path="/profile"><Profile/></Route>
    <Route path="/CreatePost"><CreatePost/></Route>

       

    </BrowserRouter>
       
        
    </div>
  );
}

export default App;