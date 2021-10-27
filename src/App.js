import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Animal from './components/Animal/Animal';
import Human from './components/Human/Human';
import Home from './components/Home/Home';
import Charity from './components/Charity/Charity';
import SignUp from './components/Forms/SignUp/SignUp';
import login from './components/Forms/LogIn/LogIn';
import EditUser from './components/Forms/EditUser/EditUser';
import UserProfile from './components/UserProfile/UserProfile';
import AddCase from './components/Forms/AddCase/AddCase';


const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/human' exact component={Human} />
            <Route path='/animal' exact component={Animal} />
            <Route path='/charity' exact component={Charity} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/login' exact component={login} />
            <Route path='/profile' exact component={UserProfile} />
            <Route path='/edituser' exact component={EditUser} />
            <Route path='/addcase' exact component={AddCase} />
            <Redirect to='/' />
          </Switch>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
