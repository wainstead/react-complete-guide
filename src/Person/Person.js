import React from 'react';
import './Person.css';

const person = (props) => {
    //return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a Person and my name is {props.name}. I am {props.age}.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person;