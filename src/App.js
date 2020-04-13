import React from 'react';
import './App.css';
import './pure-min.css';
import './email.css';
import Nav from './components/Nav';
import EmailContent from './components/EmailContent';
import EmailContent2 from './components/EmailContent2';
import EmailList from './components/EmailList';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="layout" class="content pure-g">
        <Nav />
        <EmailList />
        
        <Switch>
            <Route path="/tilto">
                <EmailContent />
            </Route>
            <Route path="/eric">
                <EmailContent2 />
            </Route>
            <Route path="/andrew">
                <EmailContent2 />
            </Route>
            <Route path="/finance">
                <EmailContent2 />
            </Route>
            <Route path="/news">
                <EmailContent2 />
            </Route>
            <Route path="/reid">
                <EmailContent2 />
            </Route>
            <Route path="/yui">
                <EmailContent2 />
            </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
