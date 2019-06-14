import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState(() => ({ smurfs: res.data }));
      })
      .catch(err => {
        console.error('Server Error', err);
      })
  }

  addSmurf = (props, smurf) => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({ smurfs: res.data })
        props.history.push('/smurfs')
      })
      .catch(err => { console.log(err) })
  }

  deleteSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(res => {
        this.setState({ smurfs: res.data })
        this.props.history.push('/smurfs')
      })
      .catch(err => { console.log(err) })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/smurfs">Smurfs</NavLink>
          </div>
        </nav>
        <Route
          exact
          path="/"
          render={props => (
            <SmurfForm
              {...props}
              addSmurf={this.addSmurf}
            />
          )}
        />
        <Route
          path="/smurfs"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
