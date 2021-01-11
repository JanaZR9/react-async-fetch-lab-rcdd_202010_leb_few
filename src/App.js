// create your App component here
import React from 'react';

 export default class App extends React.component{
   componentDidMount(){
     fetch(" http://api.open-notify.org/astros.json")
     .then(res => res.json)
     .then(data => )
   }
 }