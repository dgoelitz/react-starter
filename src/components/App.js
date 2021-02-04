import React from 'react';
import Search from './Search.js';
//import SearchResults from './SearchResults.js'
import '../main.css';
import List from './List.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searched: []
    };

    this.movies = [
      'Mean Girls',
      'Hackers',
      'The Grey',
      'Sunshine',
      'Ex Machina'
    ];

    this.onSearchClick = this.onSearchClick.bind(this);
  }


  onSearchClick(value) {
    {
      var newText = this.movies.map(function (movie) {
        if (movie.toLowerCase().includes(value.toLowerCase())) {
          return movie;
        }
      })
      for (var i = newText.length - 1; i >= 0; i--) {
        if (newText[i] === undefined) {
          newText.splice(i, 1);
        }
      }
      if (newText.length === 0) {
        this.setState({
          searched: ['NO MATCHING RESULTS!']
        });
      } else {
        this.setState({
          searched: newText
        });
      }
    }
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onClick={this.onSearchClick} />
          </div>
        </nav>
        <List list={this.state.searched} />
      </div>
    )
  }
}




export default App;
