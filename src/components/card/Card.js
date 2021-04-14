import React from 'react';
import _ from 'lodash';
import {useHistory} from "react-router-dom";

import './Card.css';

const Card = (props) => {
  var {title} = props;
  var history = useHistory();

  const onCardClick = ({topic}) => {
    history.push('/' + _.camelCase(topic));
  }

  return (
    <div className='card' onClick={() => onCardClick({topic: title})}>
      <h3>{title}</h3>
    </div>
  )
}

export default Card;