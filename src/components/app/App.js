import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import _ from 'lodash';
import {topics} from '../../topics';
import Container from '../container/Container.js';
import Bubble from '../algorithms/sort/bubble/Bubble';
import Binary from '../algorithms/search/binary/Binary';

import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
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
          <Route path='/search' render={() => <Container onRouteChange={(location) => setLocation(location)} children={mainTopics}/>}/>
          <Route path='/bubble' component={Bubble}/>
          <Route path='/binary' component={Binary}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
