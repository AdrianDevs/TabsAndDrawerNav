import React from 'react';
import { Router } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { browserHistory } from '../lib/browser';

import { MainView } from './pages/MainView';

/**
 * Handles authentication flow
 * Shows loading spinner
 */
const _App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      {/* <h1>Hello</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button> */}
      <Router history={browserHistory}>
        <MainView />
      </Router>
    </div>
  );
};

_App.displayName = 'AppView';

export const App = _App;
