import React from 'react';

var Entry = (props) => (
    <li className="list-item" key={props.index}>{props.entry}</li>
  );

  export default Entry;