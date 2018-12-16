import React, { Component } from 'react';
import classes from './App.css';
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
  
    let persons = null;
    let btnClass = '';

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
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h2>Hi, I'm a React app!</h2>
        <hr />
        <p className={assignedClasses.join(' ')}>This is really working!</p>

        <button
        className={btnClass}
          //onClick={() => this.switchNameHandler('Stephen Michael')}>Switch Name</button>
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello sailor!!!'))
    );
  }
}

export default App;
