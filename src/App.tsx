import React from 'react';
import './App.css';

const myData = require('./CollegeBasketballTeams.json')
const teams = myData["teams"]

interface props {
  school: string;
  name: string;
  city: string;
  state: string;
}

function App() {  
  return (
    <div>
      <Header/>
      <List/>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Welcome to NCAA College Basketball</h1>
        <p className="header-description">Below you will find information on all the colleges in NCAA Basketball.</p>
      </div>
    </header>
  );
}

function List() {
  return (
    <div className="card-container">
      { teams.map((blah: props) => (<School {...blah} />)) }
    </div>
  )
}

class School extends React.Component<props>
{
  render() {
    const college = this.props;

    return (
      <div className="card">
      <div className="card-content">
        <h2 className="card-title">{college.school}</h2>
        <h3 className="card-description">{college.name}</h3>
          <p>{college.city}, {college.state}</p>
      </div>
    </div>
    )
  }
}

export default App;
