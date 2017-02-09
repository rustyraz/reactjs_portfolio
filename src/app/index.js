import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component{
  render(){
    let user = {
      name : "Peter",
      photo: 'https://avatars3.githubusercontent.com/u/1265786?v=3&s=460',
      email: "pngesh@gmail.com",
      intro: "I have worked as a freelance web developer for more than 6 years",
      languages: ['Node.js','Reactjs','Redis','SQL','MongoDB','ES6','Angularjs','PHP']
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home title={"Portfolio"} age={30} user={user}>
              <p>This is a child paragraph</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
