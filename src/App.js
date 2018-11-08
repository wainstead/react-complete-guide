import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { key: 'fdsaf', name: "Steve", age: 53 },
      { key: 'ewrew', name: "Christine", age: 46 },
      { key: 'rewre', name: "Finn", age: 8 }
    ],
    showPersons: false,
  }

  // switchNameHandler = (newName) => {
  //   //console.log("button clicked!");
  //   //DON'T DO THIS: this.state.persons[0].name = "Stephen"
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 53 },
  //       { name: "Xtine", age: 46 },
  //       { name: "Finnie the Pooh", age: 8 }
  //     ]
  //   })
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  nameChangeHandler = (event, key) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.key === key;
    })
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.key}
              changed={(event) => this.nameChangeHandler(event, person.key)}
            />
          })}
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
