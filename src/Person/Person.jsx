import React from 'react';
import classes from './Person.module.css'
//import Radium from 'radium';
//import styled from 'styled-components';


const person = ( props ) => {

    return (
        
       
          <div classname = {classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
       
    )
};

export default person;