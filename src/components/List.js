import React from 'react';
import Entry from './Entry.js';

var List = (props) => (

    <div className="movie-list">
        {props.list.map((movie, index) =>
        <Entry entry={movie} key={index} />)}
    </div>
);


export default List;