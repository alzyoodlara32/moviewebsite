import React, { Component } from 'react';
import '../src/App.css';
import '../src/Newmovie/new.css';
import Nav  from './Nav';
import Home from './Home/Home';
import News from './News/News';
import  Footer from './Footer';
import  Newmovie from './Newmovie/Newmovie';
import  About from './About/About';
import  Contact from './Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Route,
    Link,
    Switch} from 'react-router-dom';

function App() {
  

  
  return (
    
  


<BrowserRouter>
       
       
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/Newmovies">New movies</Link>
          </li>
        </ul>
      </nav>
      
      
     <Switch>
        <Route path="/About" component={About} exact />
        <Route path="/" component={Home} exact />
        <Route path="/News" component={News} exact />
        <Route path="/Nav" component={Nav} exact />
        <Route path="/Footer" component={Footer} exact />
        <Route path="/Contact" component={Contact} exact />
        <Route path="/Newmovies" component={Newmovie} exact />
      </Switch>

</BrowserRouter>
      
     
  )
}

      
    
  

export default App
