import React, {useState} from 'react';
import {Button, Form, Segment} from 'semantic-ui-react'
import _ from 'lodash';

import './SortModel.css';

const SortModel = (props) => {
  var [array, setArray] = useState([]);

  return (
    <div className='sort-model-container'>
      {props.hint && <h4>{props.hint}</h4>}
      <Form>
        <Form.Field>
          <label>ints to sort (like 1, 2, 3)</label>
          <input placeholder='nums...' onChange={(event) => setArray(_.map(event.target.value.split(','), num => Number.parseInt(num)))}/>
        </Form.Field>
        <Button type='submit' onClick={() => props.onSort(array)}>Sort</Button>
      </Form>
      {props.sortedArray.length > 0 && <Segment>{`[${props.sortedArray}]`}</Segment>}
    </div>
  )
}

export default SortModel;