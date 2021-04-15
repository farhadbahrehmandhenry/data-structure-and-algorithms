import React, {useState} from 'react';
import {Button, Form, Segment} from 'semantic-ui-react'

import './SortModel.css';

const SortModel = (props) => {
  var [array, setArray] = useState([]);

  return (
    <div className='sort-model-container'>
      <Form>
        <Form.Field>
          <label>ints to sort (like 1, 2, 3)</label>
          <input placeholder='nums...' onChange={(event) => setArray(event.target.value)}/>
        </Form.Field>
        <Button type='submit' onClick={() => props.onSort(array)}>Sort</Button>
      </Form>
      {props.sortedArray.length > 0 && <Segment>{`[${props.sortedArray}]`}</Segment>}
    </div>
  )
}

export default SortModel;