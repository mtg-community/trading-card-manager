// @flow strict

import { connect } from 'react-redux';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';
import { Navigator } from '../../../navigator';

export const connectReduxAndNavigator = (
  mapStateToProps: ?{},
  mapDispatchToProps: ?{},
) => {
  const withNavigator = mapProps(mapComponentIdToNavigator);
  const reduxConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  return compose(
    reduxConnected,
    withNavigator,
  );
};

const mapComponentIdToNavigator = (props: {}) => ({
  //$FlowIgnoreNavigationComponentId
  navigator: new Navigator(props.componentId),
  ...props,
});
