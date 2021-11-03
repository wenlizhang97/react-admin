import React from 'react';
import './App.css';
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import Home from './view/Home'
import About from './view/About'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={};
  }
  
  render() {
    return (
      <div>
        123354
     <BrowserRouter>
       
     <Route exact component={Home} path="/" />
     <Route component={About} path="/about"/>
  
     </BrowserRouter>
     </div>
    );
  }
}


export default App;
