import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import _ from 'lodash';
import {topics} from '../../topics';
import Container from '../container/Container.js';
import SortModel from '../algorithms/sort/SortModel';

import './App.css';

function App(props) {
  var [location, setLocation] = useState('home');
  var mainTopics = _.filter(_.map(topics, 'key'), title => title !== 'home');
  var childrenKeys = _.flatten(_.map(_.map(topics, 'children'), children => _.keys(children)));

  if (mainTopics.includes(location)) {
    mainTopics = _.keys(_.find(topics, topic => topic.key === `${location}`).children);
  }
  else if (childrenKeys.includes(location)) {
    mainTopics = _.find(_.map(topics, 'children'), child => _.keys(child).includes(`${location}`))[`${location}`];
  }
  else {
    
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/home' render={() => <Container onRouteChange={(location) => setLocation(location)} children={mainTopics}/>}/>
          <Route path='/dataStructure' render={() => <Container onRouteChange={(location) => setLocation(location)} children={mainTopics}/>}/>
          <Route path='/algorithms' render={() => <Container onRouteChange={(location) => setLocation(location)} children={mainTopics}/>}/>
          <Route path='/sort' render={() => <Container onRouteChange={(location) => setLocation(location)} children={mainTopics}/>}/>
          <Route path='/bubble' component={SortModel}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
