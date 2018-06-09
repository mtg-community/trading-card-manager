// @flow

import { shallow } from 'enzyme';
import React from 'react';
import I18n from 'react-native-i18n';

import { ErrorComponent } from '../errorComponent';
import { ErrorScreen } from '../../errorScreen';
import { dismissModal } from '../../../../navigation';
jest.mock('../../../../navigation');

describe('<ErrorScreen />', () => {
  const error = new Error('*** TEST ERROR, IGNORE IT ***');
  const props = {
    title: 'TITLE',
    error: error,
    componentId: 'string',
  };

  const wrapper = shallow(<ErrorScreen {...props} />);
  const instance = wrapper.instance();
  const component = wrapper.find(ErrorComponent);

  it('should pass props correctly to <ErrorComponent />', () => {
    const errorComponentProps = component.props();

    expect(errorComponentProps.title).toEqual(props.title);
    expect(errorComponentProps.message).toEqual(props.error.message);
    expect(errorComponentProps.buttonText).toEqual(I18n.t('ERROR/BUTTON'));
    expect(errorComponentProps.navigateBack).toEqual(instance.dismiss);
    expect(errorComponentProps.onButtonPress).toEqual(instance.dismiss);
  });

  it('should dismiss itself as provided callbacks', () => {
    instance.dismiss();
    expect(dismissModal).toHaveBeenCalledWith(props.componentId);
  });
});
