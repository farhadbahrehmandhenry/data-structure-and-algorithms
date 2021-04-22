import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import _ from 'lodash';
import {topics} from '../../topics';
import Container from '../container/Container.js';
import Bubble from '../algorithms/sort/bubble/Bubble';
import Insertion from '../algorithms/sort/insertion/Insertion';
import Selection from '../algorithms/sort/selection/Selection';
import Binary from '../algorithms/search/binary/Binary';
import Linear from '../algorithms/search/linear/Linear';
import Anagram from '../problemSolvingPattern/frequency/Anagram';
import Parantheses from '../problemSolvingPattern/backTracking/Parantheses.js';

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
          <Route path='/bubble' component={Bubble}/>
          <Route path='/selection' component={Selection}/>
          <Route path='/insertion' component={Insertion}/>
          <Route path='/search' render={() => <Container onRouteChange={(location) => setLocation(location)} children={mainTopics}/>}/>
          <Route path='/binary' component={Binary}/>
          <Route path='/linear' component={Linear}/>
          <Route path='/problemSolvingPattern' render={() => <Container onRouteChange={(location) => setLocation(location)} children={mainTopics}/>}/>
          <Route path='/frequency' render={() => <Container onRouteChange={(location) => setLocation(location)} children={mainTopics}/>}/>
          <Route path='/anagram' component={Anagram}/>
          <Route path='/backTracking' render={() => <Container onRouteChange={(location) => setLocation(location)} children={mainTopics}/>}/>
          <Route path='/Parantheses' component={Parantheses}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
