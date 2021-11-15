import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Charity from './components/Charity/Charity';
import SignUp from './components/Forms/SignUp/SignUp';
import login from './components/Forms/LogIn/LogIn';
import EditUser from './components/Forms/EditUser/EditUser';
import UserProfile from './components/UserProfile/UserProfile';
import AddCase from './components/Forms/AddCase/AddCase';
import EditCase from './components/Forms/EditCase/EditCase';
import {UserProvider} from './Contexts/UserProvider'
import CaseDetails from './components/CaseDetails/CaseDetails';
import MapCases from './components/MapCases/MapCases';
import CasesFilters from './components/CasesFilters/CasesFilters';

const App = () => {
  return (
    <>
      <Router>
        <UserProvider>
          <header>
            <NavBar />
          </header>
          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/case' exact component={MapCases} />
              <Route path='/filters' exact component={CasesFilters} />
              <Route path='/case/:id' exact component={CaseDetails} />
              <Route path='/case/:id/edit' exact component={EditCase} />
              <Route path='/addcase' exact component={AddCase} />
              <Route path='/charity' exact component={Charity} />
              <Route path='/signup' exact component={SignUp} />
              <Route path='/login' exact component={login} />
              <Route path='/user/:id' exact component={UserProfile} />
              <Route path='/user/:id/edit' exact component={EditUser} />
              <Redirect to='/' />
            </Switch>
          </main>
          <Footer />
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
