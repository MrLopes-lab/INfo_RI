import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppProvider from '../hooks';

import SingIn from '../pages/SingIn';

function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <AppProvider>
          <Route path="/" exact component={SingIn} />
        </AppProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
