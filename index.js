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

      <div class="page-wrapper">
        <div class="app-home">
            <div class="question-box">
                <div class="logo-wrapper">
                    <img src="./assets/images/120px-Star_Wars_Logo.svg.png" alt="" />
                </div>
                <div class="cta">
                    <a href="" title="Button push" class="button btnPush btnYellow"><i class="mr-10 fa fa-star" aria-hidden="true"></i>
                        Do or do not. There is no try. <i class="ml-10 fa fa-star" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="question-bank">
                    <ul>
                        <li>
                            <div class="ques">Which of all Star Wars movies has the longest opening crawl (counted by number
                                of characters)?</div>
                            <div class="ans">Return of the Jedi</div>
                        </li>
                        <li>
                            <div class="ques">What character (person) appeared in most of the Star Wars films?</div>
                            <div class="ans">Yoda</div>
                        </li>
                        <li>
                            <div class="ques">What species (i.e. characters that belong to certain species) appeared in the most number of Star Wars films?</div>
                            <div class="ans">
                                <div>Human (4)</div>
                                <div>Droid (9)</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     </div> 
    </div>
    );

    
    

  }
}

render(<App />, document.getElementById('root'));
