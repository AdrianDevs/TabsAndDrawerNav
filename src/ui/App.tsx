import React from 'react';
import { Router } from 'react-router-dom';

import { browserHistory } from '../lib/browser';

import { MainView } from './pages/MainView';

const _App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <MainView />
      </Router>
    </div>
  );
};

_App.displayName = 'AppView';

export const App = _App;
