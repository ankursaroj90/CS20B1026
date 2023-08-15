import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllTrainsPage from './components/AllTrainPage';
import SingleTrainPage from './components/SingleTrainPage';
import './app.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={AllTrainsPage} />
          <Route path="/train/:trainNumber" component={SingleTrainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
