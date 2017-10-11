import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

//import Search          from   './Components/Favlisting/Search';

import ListingsAll       from   './Components/Favlisting/ListingsAll'; //all search listings
import ListingsShow      from   './Components/Favlisting/ListingsShow'; //show one listing
import FavListingCreate  from   './Components/Favlisting/FavListingCreate'; //insert into db by user
import FavListingUpdate  from   './Components/Favlisting/FavListingUpdate'; //update comments/status by user
import FavListingShow    from   './Components/Favlisting/FavListingShow'; //show one favlisting by user
import FavListingAll     from   './Components/Favlisting/FavListingAll'; //show all favlistings by user     

// import Login          from   './Components/Auth/Login';
// import Register       from   './Components/Auth/Registration';
// import User           from   './Components/Auth/User';

import Footer from    './Components/Footer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {},
      loggedIn: false,
    }
    // this.loginAppSuccess = this.loginAppSuccess.bind(this)
      this.userDataForState = this.userDataForState.bind(this)
      this.MainPage = this.MainPage.bind(this)
      this.loggedOut = this.loggedOut.bind(this)
    
    }
    loggedOut(){
      this.setState({
        user: {},
        loggedIn: false,
      })
    }
    // loginAppSuccess(data){
      MainPage({ children }) {
  
      //return <div>{this.state.loggedIn?<Header2 user={this.state.user} loggedOut={this.loggedOut}/>:<Header user={this.state.user}/>}{children}</div>
  
    }
    userDataForState(res){
        this.setState({
          user: res.data.user,
          loggedIn: true,
      });
    }

  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" component={this.MainPage} />
     
      <Route path='*' render={Footer} />
      </div>
      </Router>
    );
  }
}

export default App;
