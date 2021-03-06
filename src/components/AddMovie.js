import React from 'react';


class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.handleChange} />
        <button className="btn hidden-sm-down" onClick={() => { this.props.onClick(this.state.value) }}>
          <span className="glyphicon glyphicon-search">New</span>
        </button>
      </div>
    )
  }
};


export default AddMovie;