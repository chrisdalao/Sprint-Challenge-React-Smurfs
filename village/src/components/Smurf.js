import React from 'react';

const Smurf = props => {
  return (
    <div className="smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button className="smurf-delete-btn" onClick={e => props.deleteSmurf(e, props.smurf)}>Delete</button>
      <button className="smurf-update-btn" onClick={e => props.setUpdateForm(e, props.smurf)}>Update</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

