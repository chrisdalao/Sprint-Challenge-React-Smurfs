import React, { Component } from 'react';
import uuid from 'uuid';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        id: uuid.v4(),
        name: '',
        age: '',
        height: ''
      }
    };
  }

  submitSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(this.state.smurf)
    this.setState({
      smurf: {
        id: this.state.id,
        name: '',
        age: '',
        height: ''
      }
    });
  }

  handleInputChange = e => {
    e.persist();
    let value = e.target.value
    if (e.target.name === 'age') {
      value = parseInt(value, 10);
    }
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: value
      }
    }));
  };

  render() {
    return (
      <div className="smurf-form">
        <form className="smurf-form-submit" onSubmit={this.submitSmurf}>
          <input
            type='text'
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            type='number'
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            type='text'
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
