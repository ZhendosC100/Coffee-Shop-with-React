import React, {Component} from 'react';
import MainPage from './components/pages/mainpage';
import CoffeePage from './components/pages/coffeePage';
import OurPleasure from './components/pages/ourPleasure';
import './App.sass';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Header from './components/header';


export default class App extends Component {
  render(){
    return (
    
      <Router>
        
        <Route path='/' exact component={MainPage} />
         <Route path ='/coffe-page' component={CoffeePage}/>
         <Route path='/our-pleasure' component={OurPleasure}/> 

      </Router>
     );
  }
}

