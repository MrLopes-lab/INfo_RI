import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/SingIn';
// import App from './pages/Dashboard/Index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        {/* <Route path="/app" component={App} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;