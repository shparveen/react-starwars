import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
   state = {
      loading:true,
      person:null,
      users:null
  }

  componentDidMount(){
    const url = "https://api.randomuser.me/";
     fetch("https://api.randomuser.me/")
     .then(response => response.json())
      .then(data => {
        console.log(data.results[0])
          this.setState({ person:data.results[0], loading:false})
        }
        
      );
  
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>response.json())
    .then(data =>{
        console.log(data);
         this.setState({ users:data, loading:false})
    });
  }
  render() {
    if(this.state.loading ){
      return <div>loading..</div>
    }
    if(!this.state.person){
      return <div>Person is not present</div>
    }
    if(!this.state.users){
      return <div>Users is not present</div>
    }
    


const {loading,person,users} = this.state
    return (
      <div>
      <h1>Users</h1>
      
          {users.map(userdata=>(
            <p> Name: {userdata.name} | email: {userdata.email}</p>
          ))}
      
      <div>
       <div>
            <div>{person.name.title}</div>
            <div>{person.name.first}</div>
            <div>{person.name.last}</div>
            <div><img src={person.picture.large} /></div>
         </div>
      </div>
      </div>
    );

    
    

  }
}

render(<App />, document.getElementById('root'));
