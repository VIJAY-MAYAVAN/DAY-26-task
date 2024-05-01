// App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AllCourses from './components/AllCourses';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/fullstack">Full Stack Development</Link>
            </li>
            <li>
              <Link to="/datascience">Data Science</Link>
            </li>
            <li>
              <Link to="/cybersecurity">Cyber Security</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/fullstack">
            <FullStackDevelopment />
          </Route>
          <Route path="/datascience">
            <DataScience />
          </Route>
          <Route path="/cybersecurity">
            <CyberSecurity />
          </Route>
          <Route path="/career">
            <Career />
          </Route>
          <Route path="/">
            <AllCourses />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
