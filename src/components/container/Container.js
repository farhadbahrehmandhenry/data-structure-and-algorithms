import React from 'react';
import _ from 'lodash';
import {topics} from '../../topics';
import Card from '../card/Card';

import './Container.css';

const Container = (props) => {
  var {pathname} = props.location;
  var topic =  _.find(topics, topic => topic.path === pathname);
  var titles = topic.key === 'All Topics' ? _.filter(_.map(topics, 'key'), title => title !== 'All Topics') : topic.items;

  return (
    <div className='container'>
      {_.map(titles, title => (<Card title={title}/>))}
    </div>
  )
}

export default Container;