import React, { Component } from 'react'

export class UpdateForm extends Component {
    state = {
        smurf: this.props.activeSmurf
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

    submitSmurf = e => {
        e.preventDefault();
        this.props.updateSmurf(this.state.smurf)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitSmurf}>
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
                    <button type="submit">Update Smurf</button>
                </form>
            </div>
        )
    }
}

export default UpdateForm
