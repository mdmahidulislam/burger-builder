import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = props => {
 const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Mahid', age: 24},
      { name: 'sajib', age: 23}
    ]
   
  });

  const [otherState, setOtherState] = useState('Some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Arafat', age: 24},
        { name: 'sajib', age: 23}
      ]
    });
  };
  
  return (
    <div className="App">
      
      <h1>Hi there</h1>
      <button onClick= {switchNameHandler}>Switch button</button>
      <Person name={personsState.persons[0].name} age = {personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age = {personsState.persons[1].age}>Music</Person>
    

    </div>
  );

}

export default App;



