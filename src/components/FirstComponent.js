import React from 'react';

 
const Tasks = ({ name, task })=>{
  if (task){
    return null;
  }
  else{
   return <div><h2>{name}</h2></div>;
  }
}

export default function FirstComponent() {

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