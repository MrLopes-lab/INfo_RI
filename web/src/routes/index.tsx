import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

import Route from './Route';

import SingIn from '../pages/SingIn';

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}

export default Routes;
