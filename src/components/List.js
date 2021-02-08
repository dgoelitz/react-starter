import React from 'react';
import Entry from './Entry.js';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.seenIt = false;
        this.updatedKey = 0;
    }
    render() {
        return (
            <div className="movie-list">
                {this.props.list.map((movie, index) => {
                    // overall counter for how many of the found movies are accounted for
                    var count = 0;
                    // index of the item in overall movie list
                    var foundIndex = 0;
                    // loop through found items. found is an array with true or false for which items are in search
                    for (var i = 0; i < this.props.found.length; i++) {
                        // if the item is true in found (its in the search)
                        if (this.props.found[i]) {
                            // if the counter of how many movies was in the list is now equal to the current films index... its the one!
                            if (count === index) {
                                // found index is the movie's original index
                                foundIndex = i;
                                break;
                            }
                            count++;
                        }
                    }
                    this.updatedKey++;
                    this.seenIt = this.props.seen[foundIndex];
                    return <Entry onClick={this.props.onClick} entry={movie} key={this.updatedKey} seen={this.seenIt} found={foundIndex} />;
                })}
            </div>
        );
    };
}

export default List;