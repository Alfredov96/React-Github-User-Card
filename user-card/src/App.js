import React from 'react';
import axios from 'axios';
import Card from './Card';
import MyCard from './MyCard'
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      git: [], followers: []
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/Alfredov96`).then(response => {console.log('my git info', response.data)
      this.setState({
        git: response.data
      });
    })
    .catch(error => {
      console.log('error', error)
    })
    axios
      .get("https://api.github.com/users/Alfredov96/followers")
      .then(response => {console.log('my git followers info', response.data)
        this.setState({ followers: response.data });
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  // fetchGit = event => {
  //   event.preventDefault();
  //   axios
  //     .get(`https://api.github.com/users/Alfredov96/${this.state.gitName}`)
  //     .then(res => {
  //       this.setState({ git: res.data.message });
  //     });
  // };

  // handleChange = event => {
  //   this.setState({
  //     gitFollowers: event.target.value
  //   });
  // };

  
  render() {
    return (
      <div className="App">
        <h1>It Worked!!</h1>
        {/* <input
          type="text"
          value={this.state.followers}
          // onChange={this.handleChange}
        /> */}
        <div className="git">
          <MyCard 
            name={this.state.git.login}
            img={this.state.git.avatar_url}
          />
          {this.state.followers.map(follower => (
          <Card
            // data={tfollower}
            name={follower.login}
            img={follower.avatar_url}
          />
          
          ))}
        </div>
      </div>
    );
  }
}

export default App;



{/* <img width="200" src={follower.avatar_url} key={follower.id} /> */}