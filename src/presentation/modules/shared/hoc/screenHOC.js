// @flow strict

import { connect } from 'react-redux';
import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';
import { Navigator } from '../../../navigation';

export const connectReduxAndNavigator = (
  mapStateToProps,
  mapDispatchToProps,
) => {
  const withNavigator = mapProps(mapComponentIdToNavigator);
  const reduxConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  return compose(
    withNavigator,
    reduxConnected,
  );
};

const mapComponentIdToNavigator = (props: PropsTypes) => ({
  navigator: new Navigator(props.componentId),
});
