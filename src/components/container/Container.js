import React from 'react';
import _ from 'lodash';
import Card from '../card/Card';

import './Container.css';

const Container = (props) => {
  return (
    <div className='container'>
      {_.map(props.children, title => {
        return <Card key={title} title={title} onCardClick={(location) => props.onRouteChange(location)}/>
      })}
    </div>
  )
}

export default Container;