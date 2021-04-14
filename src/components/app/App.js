import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Container from '../container/Container.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/home' component={Container} />
          <Route path='/dataStructure' component={Container} />
          <Route path='/algorithms' component={Container} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
