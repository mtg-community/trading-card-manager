// @flow

import { shallow } from 'enzyme';
import React from 'react';
import I18n from 'react-native-i18n';

import { ErrorComponent } from '../errorComponent';
import { ErrorContainer } from '../errorScreen';

describe('<ErrorContainer />', () => {
  const error = new Error('*** TEST ERROR, IGNORE IT ***');
  const props = {
    title: 'TITLE',
    error: undefined,
    componentId: 'string',
  };

  const wrapper = shallow(<ErrorContainer {...props} />);
  const instance = wrapper.instance();
  const component = wrapper.find(ErrorComponent);

  it('should pass props correctly to <ErrorComponent />', () => {
    const errorComponentProps = component.props();

    expect(errorComponentProps.title).toEqual(props.title);
    expect(errorComponentProps.message).toEqual('');
    expect(errorComponentProps.buttonText).toEqual(I18n.t('ERROR/BUTTON'));
    // expect(errorComponentProps.navigateBack).toEqual(instance.dismiss);
    // expect(errorComponentProps.onButtonPress).toEqual(instance.dismiss);
  });
});
