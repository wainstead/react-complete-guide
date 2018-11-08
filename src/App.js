import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Steve", age: 53 },
      { name: "Christine", age: 46 },
      { name: "Finn", age: 8 }
    ],
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    //console.log("button clicked!");
    //DON'T DO THIS: this.state.persons[0].name = "Stephen"
    this.setState({
      persons: [
        { name: newName, age: 53 },
        { name: "Xtine", age: 46 },
        { name: "Finnie the Pooh", age: 8 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Steve', age: 53 },
        { name: event.target.value, age: 46 },
        { name: "Finnie the Pooh", age: 8 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {
    const style = {
      backgroundColor: 'navajowhite',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Steve-o-rino')}
            changed={this.nameChangeHandler}
          >Hobbies: licorice</Person>

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      );
    }
    return (
      <div className="App">
        <h2>Hi, I'm a React app!</h2>
        <hr />
        <p>This is really working!</p>

        <button
          style={style}
          //onClick={() => this.switchNameHandler('Stephen Michael')}>Switch Name</button>
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello sailor!!!'))
    );
  }
}

export default App;
