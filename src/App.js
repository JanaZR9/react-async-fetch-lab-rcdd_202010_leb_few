// create your App component here
import React from 'react';

 export default class App extends React.Component{
   
   state = {
     people :[]
   }
   
   componentDidMount(){
     fetch('http://api.open-notify.org/astros.json')
     .then(res => res.json())
     .then(data =>{this.setState({
       people:data.people
     })
     })
   }
   
   render(){
    return(
       <div>
                {this.state.people.map((person,craft) => 
                    <h1>{person.name} {person.craft} </h1>)}
            </div>
      )


  }
} 
 }