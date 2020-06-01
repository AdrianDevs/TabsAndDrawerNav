import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';

import * as serviceWorker from './serviceWorker';

import theme from 'ui/theme';
import { App } from './ui/App';

function Root() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <SnackbarProvider preventDuplicate autoHideDuration={3000} maxSnack={3}>
          <CssBaseline>
            <App />
          </CssBaseline>
        </SnackbarProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
