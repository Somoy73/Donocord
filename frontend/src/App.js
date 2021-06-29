import React, {Component} from 'react';
import PageWrapper from './comps/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {withFormik} from 'formik';
//Pages
import Home from './comps/pages/Home';
import About from './comps/pages/About';
import Team from './comps/pages/Team';
import Portfolio from './comps/common/Portfolio';
import Contact from './comps/pages/Contact';
import Login from './comps/pages/Login';
import Register from './comps/pages/Register';
import Registered from './comps/pages/Registered';
import Logout from './comps/pages/logout';
import oldhome from './comps/common/oldhome';
import women from './comps/common/women';
import child from './comps/common/child';
import drugrehab from './comps/common/drugrehab';
import oldhomedon from './comps/common/oldhomedon';
import victim from './comps/common/victim';
import Donate from './comps/pages/Donation';
import search from './comps/pages/Search';
import organization from './comps/pages/organization';
class App extends Component{
  render(){
    return(
      <div>
        <Router>
          <PageWrapper>
              <Route
                exact = {true}
                path='/'
                component= {Home}
              />
              <Route
                path='/about'
                component= {About}
              />
              <Route
                path='/team'
                component= {Team}
              />
              <Route
                path='/portfolio'
                component= {Portfolio}
              />
              <Route
                path='/contact'
                component= {Contact}
              />
              <Route
                path='/login'
                component= {Login}
              />
              <Route
                path='/register'
                component= {Register}
              />
              <Route
                path='/registered'
                component= {Registered}
              />
              <Route
                path='/logout'
                component= {Logout}
              />
              <Route
                path='/oldhome'
                component= {oldhome}
              />
              <Route
                path='/child'
                component= {child}
              />
              <Route
                path='/women'
                component= {women}
              />
              <Route
                path='/drugrehab'
                component= {drugrehab}
              />
              <Route
                path='/oldhomedon'
                component= {oldhomedon}
              />
              <Route
                path='/victim'
                component= {victim}
              />
              <Route
                path='/donate'
                component= {Donate}
              />
              <Route
                path='/search'
                component= {search}
              />
          </PageWrapper>
        </Router>
        <Router>
          <Route
            path='/organization'
            component={organization}
          />
        </Router>
        
      </div>

    );
  }
}

export default App;