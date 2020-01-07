import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Action } from '@reduxjs/toolkit';
import { listTypes, updateList } from '../../domain/ducks/cardListReducer';
import { Colors, Metrics } from '../constants';

interface Props {
  isVisible: boolean;
  onRequestClose: () => void;
  cardId: string;
}

export const TRADE_WANT_BUTTON_LABEL = 'wishList:tradeWant';
export const TRADE_HAVE_BUTTON_LABEL = 'wishList:tradeHave';
export const BUY_BUTTON_LABEL = 'wishList:buy';
export const SELL_BUTTON_LABEL = 'wishList:sell';
export const CANCEL_BUTTON_LABEL = 'wishList:cancel';

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.black,
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: Metrics.screenWidth,
    backgroundColor: Colors.black,
    opacity: 0.9,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.white,
  },
  cancel: {
    fontSize: 18,
    color: Colors.red,
  },
});

export const WishListModal: React.FC<Props> = (props: Props) => {
  const { isVisible, onRequestClose, cardId } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      onRequestClose={onRequestClose}
      transparent
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={(): Action =>
            dispatch(
              updateList({
                listType: listTypes.TRADE_WANT,
                cardId: cardId,
              }),
            )
          }
        >
          <Text style={styles.buttonText}>{t(TRADE_WANT_BUTTON_LABEL)}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(): Action =>
            dispatch(
              updateList({
                listType: listTypes.TRADE_HAVE,
                cardId: cardId,
              }),
            )
          }
        >
          <Text style={styles.buttonText}>{t(TRADE_HAVE_BUTTON_LABEL)}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(): Action =>
            dispatch(
              updateList({
                listType: listTypes.BUY,
                cardId: cardId,
              }),
            )
          }
        >
          <Text style={styles.buttonText}>{t(BUY_BUTTON_LABEL)}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(): Action =>
            dispatch(
              updateList({
                listType: listTypes.SELL,
                cardId: cardId,
              }),
            )
          }
        >
          <Text style={styles.buttonText}>{t(SELL_BUTTON_LABEL)}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onRequestClose}>
          <Text style={styles.cancel}>{t(CANCEL_BUTTON_LABEL)}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};
