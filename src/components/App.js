import React from 'react';
import Search from './Search.js';
//import SearchResults from './SearchResults.js'
import '../main.css';
import List from './List.js';
import AddMovie from './AddMovie.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searched: [],
      found: []
    };

    this.movies = [];
    this.seen = [];

    this.onSearchClick = this.onSearchClick.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
    this.onSeenClick = this.onSeenClick.bind(this);
  }

  onSeenClick(value) {
    this.seen[value] = !this.seen[value];
  }

  onAddClick(value) {
    var newMovie = value.trim();
    var moviesLower = [];
    for (var i = 0; i < this.movies.length; i++) {
      moviesLower.push(this.movies[i].toLowerCase());
    }
    if (newMovie) {
      if (!moviesLower.includes(newMovie.toLowerCase())) {
        this.movies.push(newMovie);
        this.seen.push(false);
      }
    }
  }

  // Features to Implement: 
  // empty box after search

  onSearchClick(value) {
    {
      var indexFound = [];
      var newText = this.movies.map(function (movie) {
        if (movie.toLowerCase().includes(value.toLowerCase())) {
          return movie;
        }
      })
      for (var i = newText.length - 1; i >= 0; i--) {
        if (newText[i] === undefined) {
          newText.splice(i, 1);
          indexFound.unshift(false);
        } else {
          indexFound.unshift(true);
        }
      }
      if (newText.length === 0) {
        this.setState({
          searched: ['NO MATCHING RESULTS!']

        });
      } else {
        this.setState({
          searched: newText,
          found: indexFound
        });
      }
    }
  }

  onSeenListClick() {
    {
      var indexFound = [];
      var newText = this.movies.map((movie, index) => {
        if (this.seen[index])
          return movie;
      }
      );
      for (var i = newText.length - 1; i >= 0; i--) {
        if (newText[i] === undefined) {
          newText.splice(i, 1);
          indexFound.unshift(false);
        } else {
          indexFound.unshift(true);
        }
      }
      if (newText.length === 0) {
        this.setState({
          searched: ['NO MATCHING RESULTS!']

        });
      } else {
        this.setState({
          searched: newText,
          found: indexFound
        });
      }
    }
    <List onClick={this.onSeenClick} list={this.state.searched} found={this.state.found} seen={this.seen} />
  }

  onToSeeClick() {
    {
      var indexFound = [];
      var newText = this.movies.map((movie, index) => {
        if (!this.seen[index])
          return movie;
      }
      );
      for (var i = newText.length - 1; i >= 0; i--) {
        if (newText[i] === undefined) {
          newText.splice(i, 1);
          indexFound.unshift(false);
        } else {
          indexFound.unshift(true);
        }
      }
      if (newText.length === 0) {
        this.setState({
          searched: ['NO MATCHING RESULTS!']

        });
      } else {
        this.setState({
          searched: newText,
          found: indexFound
        });
      }
    }
    <List onClick={this.onSeenClick} list={this.state.searched} found={this.state.found} seen={this.seen} />
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <div>
            <AddMovie onClick={this.onAddClick} />
          </div>
        </nav>
        <nav className="navbar">
          <div>
            <Search onClick={this.onSearchClick} />
          </div>
        </nav>
        <nav>
          <button className="btn hidden-sm-down seen-btn" onClick={() => { this.onSeenListClick(); }}>
            <span className="glyphicon glyphicon-search">Seen</span>
          </button>
          <button className="btn hidden-sm-down seen-btn seen" onClick={() => { this.onToSeeClick(); }}>
            <span className="glyphicon glyphicon-search">To See</span>
          </button>
        </nav>
        <List onClick={this.onSeenClick} list={this.state.searched} found={this.state.found} seen={this.seen} />
      </div>
    )
  }
}




export default App;