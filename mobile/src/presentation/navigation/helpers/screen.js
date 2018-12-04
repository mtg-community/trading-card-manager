// @flow

import * as React from 'react';

export class Screen {
  route: string;
  component: React.ComponentType<any>;
  title: ?string;

  constructor(
    route: string,
    component: React.ComponentType<any>,
    title: ?string,
  ) {
    this.component = component;
    this.route = route;
    this.title = title;
  }
}
