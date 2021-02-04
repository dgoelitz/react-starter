import React from 'react';

var SearchResults = (props) => (
    <div className="search-results">
        <li className="video-list">
            {props.list}
        </li>
    </div>
);




export default SearchResults;