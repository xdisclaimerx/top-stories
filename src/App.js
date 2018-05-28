import React, { Component } from 'react';
import Stories from './components/Stories'
import Titles from './components/Titles'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    }
 }

 render() {
  
   return (
     <div className="container">
       <Titles />
       <Stories />
       
     </div>
   );
 }
}

export default App;
