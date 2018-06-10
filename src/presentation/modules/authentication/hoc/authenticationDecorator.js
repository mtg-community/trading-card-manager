// @flow strict

import * as React from 'react';
import { AuthenticatedHOC } from './authenticationHOC';

type PropsType = {};

export const authenticated = (Component: React.ComponentType<PropsType>) => (
  props: PropsType,
) => (
  <AuthenticatedHOC>
    <Component {...props} />
  </AuthenticatedHOC>
);
