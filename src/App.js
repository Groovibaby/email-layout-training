import React from 'react';
import './App.css';
import './pure-min.css';
import './email.css';
import Nav from './components/Nav';
import EmailContent from './components/EmailContent';
import EmailContent2 from './components/EmailContent2';
import EmailContent3 from './components/EmailContent3';
import EmailContent4 from './components/EmailContent4';
import EmailContent5 from './components/EmailContent5';
import EmailContent6 from './components/EmailContent6';
import EmailContent7 from './components/EmailContent7';
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
            <Route path="/yui">
                <EmailContent3 />
            </Route>
            <Route path="/reid">
                <EmailContent4 />
            </Route>
            <Route path="/andrew">
                <EmailContent5 />
            </Route>
            <Route path="/finance">
                <EmailContent6 />
            </Route>
            <Route path="/news">
                <EmailContent7 />
            </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
