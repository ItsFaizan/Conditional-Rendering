import React from 'react';

 
const Tasks = ({ name, task })=>{
    let nameety = name;
    if(task){
        nameety = name+ 1;
    }
    return (
    <div>
    {task ? (<del> {name  + '✔'}</del>):  (name) } {/*ternary operator*/}
    {name} {task ? '✔' : '❌'} {/*ternary operator*/}
    {name} {task && '✔'} { /*And operator*/}
   {nameety} {/*Conditonal rendering using JSX variable*/}

     </div>
    );
  }
  
  export default function SecondComponent() {
  
      return (
        <div>
          <h1>Faizan? How many tasks are remaining:</h1>
          <Tasks name="Javascript" task={true}/>
          <Tasks name="React" task={true}/>
          <Tasks name="Html" task={true}/>
          <Tasks name="CSS" task={false}/>
        </div>
      );
    }