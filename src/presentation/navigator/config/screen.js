import * as React from 'react';

export class Screen {
  _route: string;
  _component: React.ComponentType<*>;

  constructor(route: string, component: React.ComponentType<*>) {
    this._component = component;
    this._route = route;
  }

  get route() {
    return this._route;
  }

  get component() {
    return this._component;
  }
}
