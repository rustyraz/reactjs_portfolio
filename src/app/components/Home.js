import React from "react";

export class Home extends React.Component {
  render(){
    return(
      <div className="row">
        <div className="col-xs-12"><h3>My {this.props.title}</h3><hr/></div>
        <div className="col-xs-4">
          <img src={this.props.user.photo} width="100%"/>
        <p>Name: {this.props.user.name}. <br/>Age: {this.props.age} yrs old</p>
        <p>Email : {this.props.user.email}</p>
        </div>
        <div className="col-xs-8">
          <p><b>Introduction Details</b><br/> {this.props.user.intro}</p>
          <p><b>Programming languages</b></p>
          <ul>
            {this.props.user.languages.map((language,i) => <li key={i}>{language}</li>)}
          </ul>
        </div>

        <div className="col-xs-12">
          <hr/>
          {this.props.children}
        </div>


      </div>
    );
  }
}

//tell React the type of props to expect
Home.propTypes = {
  user: React.PropTypes.object,
  title: React.PropTypes.string,
  age: React.PropTypes.number,
  children: React.PropTypes.element.isRequired
}
