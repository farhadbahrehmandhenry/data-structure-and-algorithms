import React, {useState} from 'react';
import {Button, Form, Segment} from 'semantic-ui-react'

import './Anagram.css';

const Anagram = () => {
  var [firstStr, setFirstStr] = useState('');
  var [secondStr, setSecondStr] = useState('');
  var [result, setResult] = useState('');

  var validAnagram = (first, second) => {
    if (first.length !== second.length) {
      setResult('not a valid anagram');
      return;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      lookup[first[i]] ? lookup[first[i]] += 1 : lookup[first[i]] = 1;
    }
  
    for (let i = 0; i < second.length; i++) {
      if (!lookup[second[i]]) {
        setResult('not a valid anagram');

        return;
      }
      else lookup[second[i]] -= 1;
    }
  
    setResult('valid anagram');
    return;
  }

  return (
    <div className='anagram-container'>
      <Form>
        <Form.Field>
          <label>type first string (like anagram)</label>
          <input placeholder='string' onChange={(event) => setFirstStr(event.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>type second string (like nagarma)</label>
          <input placeholder='string' onChange={(event) => setSecondStr(event.target.value)}/>
        </Form.Field>
        <Button type='submit' onClick={() => validAnagram(firstStr, secondStr)}>Check</Button>
      </Form>
      {result && <Segment>{result}</Segment>}
    </div>
  )
}

export default Anagram;


