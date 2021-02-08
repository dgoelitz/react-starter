import React from 'react';

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seenIt: false,
      btnColor: '#d3d3d3'
    }


    this.onSeenClick = this.onSeenClick.bind(this);
  }


  componentDidMount() {
    if (this.props.seen) {
      this.setState({
        seenIt: true,
        btnColor: 'green'
      });
    } else {
      this.setState({
        seenIt: false,
        btnColor: '#d3d3d3'
      });
    }
  }


  onSeenClick() {
    if (this.state.seenIt === false) {
      this.setState({
        seenIt: true,
        btnColor: 'green'
      });
    } else {
      this.setState({
        seenIt: false,
        btnColor: '#d3d3d3'
      });
    };
    this.props.onClick(this.props.found);
  }

  render() {
    return (
      <li className="list-item" key={this.props.index} onClick={this.onSeenClick} >
        {this.props.entry}
        <button className="btn seen" style={{ backgroundColor: this.state.btnColor }}>
          <span className="glyphicon glyphicon-search">Seen it!</span>
        </button>
      </li>
    )
  }
}

export default Entry;