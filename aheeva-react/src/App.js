import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import MainPage from './pages/main/main.component.jsx';
import AnotherPage from './pages/another/another.component.jsx';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/" component={MainPage} />
        <Route path="/anotherpage" component={AnotherPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
