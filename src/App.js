import React, {Component} from 'react';
import background from './background.jpg';
import './App.css';
import Menu from './components/MenuComponent.js';
import {AUTHORS} from './shared/authors';
import {Navbar, NavbarBrand} from 'reactstrap';



class App extends Component  {
  
  constructor(props){
    super(props);
    
    this.state = {
      
      authors:AUTHORS
      
    };
    
    
  }
  
  render(){
    return (
    <div className="App">
    <Navbar dark color="primary">
    <div className="container">
    <img src={background} className="rounded-circle img-top img-fluid pro" alt="logo" />
    <NavbarBrand href="\">iTech Liberia</NavbarBrand>
    </div>
    </Navbar>
    
        <Menu authors={this.state.authors} />
    
    </div>
  );
}
}
export default App;
