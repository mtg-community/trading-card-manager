// @flow strict

import React, { Component } from 'react';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles/floatingActionButton.styles';

export type ItemType = {
  name: string,
  buttonColor: string,
  title: string,
  onPress: () => void,
};

type PropTypes = {
  items: Array<ItemType>,
};

export class FloatingActionButton extends Component<PropTypes> {
  renderItem(item: ItemType, key: number) {
    const { name, ...itemProps } = item;

    return (
      <ActionButton.Item {...itemProps} key={key}>
        <Icon name={name} style={styles.actionButtonIcon} />
      </ActionButton.Item>
    );
  }

  render() {
    return (
      <ActionButton buttonColor="rgba(231,76,60,1)">
        {this.props.items.map(this.renderItem)}
      </ActionButton>
    );
  }
}
