import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    team: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const search = {
      team: this.state.team
    };

    await axios.post(`https://localhost/nbaplayer.php`, { search })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}