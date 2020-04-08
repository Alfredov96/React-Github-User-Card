import React from 'react';
import axios from 'axios'
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      git: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/Alfredov96").then(response => {console.log('my git info', response)
      this.setState({
        git: response.data.message,
        gitName: ""
      });
    });
  }


  handleChange = event => {
    this.setState({
      gitFollowers: event.target.value
    });
  };

  fetchGit = event => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/Alfredov96/followers`)
      .then(res => {
        this.setState({ git: res.data.message });
      });
  };
  render() {
    return (
      <div className="App">
        <h1>It Worked!!</h1>
        <input
          type="text"
          value={this.state.gitFollowers}
          onChange={this.handleChange}
        />
        <button onClick={this.fetchGit}>grab followers</button>
        <div className="">
          {this.state.git.map(follower => (
            <img width="200" src={follower} key={follower} alt={follower} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
