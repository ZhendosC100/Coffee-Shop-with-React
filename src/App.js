import React, {Component} from 'react';
import MainPage from './components/pages/mainpage';
import CoffeePage from './components/pages/coffeePage';

import './App.sass';
import {BrowserRouter as Router, Route} from 'react-router-dom';


export default class App extends Component {
  render(){

    const pleasurePage = true;
    return (
    
      <Router>
        
        <Route path='/' exact component={MainPage} />
         <Route path ='/coffe-page' component={CoffeePage}/>
         <Route path='/our-pleasure' render ={() => {
           return <CoffeePage pleasurePage={pleasurePage}/>
         }}/> 

      </Router>
     );
  }
}

