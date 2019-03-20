// @flow

import React from 'react';
import { Button, Text } from 'react-native';
import { shallow } from 'enzyme';
import { FormHeader } from '../../../authentication/dumb/formHeader';
import { FormButton } from '../../../shared/components/buttons';
import { BackButtonFloating } from '../../../shared/components/buttons/backButtonFloating';

import { ErrorComponent } from '../errorComponent';

const props = {
  onButtonPress: jest.fn(),
  navigateBack: jest.fn(),
  buttonText: 'BUTTON',
  title: 'TITLE',
  message: 'MESSAGE',
};

describe('<ErrorComponent />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<ErrorComponent {...props} />);
  });

  it('should render <ErrorComponent />', () => {
    const messageElement = wrapper.find(Text);
    expect(messageElement.children().text()).toEqual(props.message);

    const formHeader = wrapper.find(FormHeader);
    expect(formHeader.prop('title')).toEqual(props.title);

    const backButton = wrapper.find(BackButtonFloating);
    expect(backButton.prop('onPress')).toEqual(props.navigateBack);

    const button = wrapper.find(FormButton);
    expect(button.prop('onPress')).toEqual(props.onButtonPress);
  });
});
