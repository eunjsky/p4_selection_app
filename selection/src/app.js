import {
  BrowserRouter as Router,
  Route, Switch, Redirect
} from "react-router-dom";
import React, { Component } from 'react';
import SignupPage from './pages/SignupPage/SignupPage';
import userService from './services/userService';
import LoginPage from './pages/LoginPage/LoginPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Navbar from './components/Navbar/Navbar';
import SelectionFormUpdate from './components/SelectionFormUpdate/SelectionFormUpdate';
import SelectionAdd from './components/SelectionAdd/SelectionAdd';
import SelectionView from './components/SelectionView/SelectionView';
import SelectionDetail from './components/SelectionDetail/SelectionDetail';
import tokenService from './services/tokenService';

class App extends Component {

  constructor(){
    super()
    this.state = {
      user: userService.getUser() 
    }
  }

  handleLogout = () => {
    console.log('logout')
    userService.logout();
    this.setState({ user: null });

  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render(){
  return (
    
    <Router>
        <div className="App">
          <Navbar currentUser = {this.state.user} handleLogout={this.handleLogout}/>
          <Switch>
            <Route path='/' exact>
              <h1>Welcome</h1>
            </Route>
            <ProtectedRoute exact path='/selections' component={SelectionView} />
            
            <ProtectedRoute exact path='/selections/new' component={SelectionAdd} />
    
            <Route exact path='/selections/:id' component={SelectionDetail} />

            <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin} /> }/>
            <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin} /> }/>
            :
              <Redirect to='/login'/>
          </Switch>
        </div>
      </Router>
  
  );
}
}
export default App;
