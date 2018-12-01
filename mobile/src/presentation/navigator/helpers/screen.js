// @flow strict

import * as React from 'react';
import type { AnyPropsTypes } from './reduxIntegration';

export class Screen {
  route: string;
  component: React.ComponentType<AnyPropsTypes>;
  title: ?string;

  constructor(
    route: string,
    component: React.ComponentType<AnyPropsTypes>,
    title: ?string,
  ) {
    this.component = component;
    this.route = route;
    this.title = title;
  }
}
