import React, {useState} from 'react';
import {Button, Form, Segment} from 'semantic-ui-react'
import _ from 'lodash';

import './SearchModel.css';

const SearchModel = (props) => {
  var [array, setArray] = useState([]);
  var [value, setValue] = useState(null);

  return (
    <div className='search-model-container'>
      {props.hint && <h4>{props.hint}</h4>}
      <Form>
        <Form.Field>
          <label>ints to search from (like 1, 2, 3)</label>
          <input placeholder='nums...' onChange={(event) => setArray(_.map(event.target.value.split(','), num => Number.parseInt(num)))}/>
        </Form.Field>
        <Form.Field>
          <label>int to look for (like 1)</label>
          <input placeholder='num' onChange={(event) => setValue(Number.parseInt(event.target.value))}/>
        </Form.Field>
        <Button type='submit' onClick={() => props.onSearch(array, value)}>Search</Button>
      </Form>
      {props.searchedIntIndex !== null && <Segment>{props.searchedIntIndex}</Segment>}
    </div>
  )
}

export default SearchModel;