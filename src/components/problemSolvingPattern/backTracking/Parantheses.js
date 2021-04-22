import React, {useState} from 'react';
import {Button, Form, Segment} from 'semantic-ui-react'

// import './Parantheses.css';

const Parantheses = () => {
  var [numberOfPairs, setNumberOfPairs] = useState(0);
  var [result, setResult] = useState([]);

  var generateParenthesis = function(n) {
    var result = [];
  
    var backTracking = (str, noOpen, noClose, n) => {
      if (str.length === n * 2) {
        result.push(str);
        return;
      }
  
      if (noOpen < n) backTracking(str+'(', noOpen + 1, noClose, n)
      if (noClose < noOpen) backTracking(str+')', noOpen, noClose+1, n)
    }
  
    backTracking('', 0, 0, n)
  
    setResult(result);
  };

  return (
    <div className='parantheses-container'>
      <Form>
        <h3>generate valid parantheses</h3>
        <Form.Field>
          <label>number of pairs</label>
          <input placeholder='string' onChange={(event) => setNumberOfPairs(event.target.value)}/>
        </Form.Field>
        <Button type='submit' onClick={() => generateParenthesis(numberOfPairs)}>Generate</Button>
      </Form>
      {result.length > 0 && <Segment>{result}</Segment>}
    </div>
  )
}

export default Parantheses;


