import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { ManaCheckboxRow } from '../ManaCheckboxRow';

const WHITE_MANA_CHECKBOX_ID = 'manaColorCheckBox:W';
const colors = [];
const setColors = jest.fn().mockImplementation(color => {
  colors.concat(color);
});

describe('ManaCheckbox component', () => {
  test('Should check a mana color', () => {
    const { getByTestId } = render(
      <ManaCheckboxRow colors={colors} setColors={setColors} />,
    );

    const whiteManaCheckbox = getByTestId(WHITE_MANA_CHECKBOX_ID);

    fireEvent.press(whiteManaCheckbox);
    expect(whiteManaCheckbox.props.isSelected).toEqual(true);
  });
});
