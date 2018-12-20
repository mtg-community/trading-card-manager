import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Private } from './components/Private';
import { Counter } from './containers/Counter';
import { SignIn } from './containers/SignIn';
import { SignUp } from './containers/SignUp';
import { withAuthentication } from './hocs/withAuthentication';

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Counter/>} />
        <Route exact path="/signIn" render={() => <SignIn/>} />
        <Route exact path="/signUp" render={() => <SignUp/>} />
        <Route exact path="/private" component={withAuthentication(Private)}/>
      </Switch>
    </BrowserRouter>
  );
}
