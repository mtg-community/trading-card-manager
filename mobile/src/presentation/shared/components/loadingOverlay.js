// @flow strict

import * as React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles/loadingOverlay.style';

type PropsType = {
  children: React.Node,
  style: View.propTypes.style,
};

export const LoadingOverlay = (props: PropsType) => {
  const { children, style } = props;
  const overlay = showOverlayCondition(props) ? renderOverlay() : null;

  return (
    <View style={style || styles.container}>
      {children}
      {overlay}
    </View>
  );
};

const renderOverlay = () => {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color={'white'} style={styles.spinner} />
    </View>
  );
};

LoadingOverlay.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

LoadingOverlay.defaultProps = {
  isLoading: false,
};

const hasChildLoading = children => {
  let isLoading = false;

  React.Children.forEach(children, child => {
    if (child.props.isLoading) {
      isLoading = true;
    }
  });

  return isLoading;
};

const showOverlayCondition = (props: PropsType) =>
  props.isLoading || hasChildLoading(props.children);
