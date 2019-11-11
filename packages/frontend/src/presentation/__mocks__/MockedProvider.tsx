import * as React from 'react';
import { Provider } from 'react-redux';
import { MTGStore } from '../../domain/DomainLayer';

type MockedProviderType = {
  children: React.ReactNode;
  store: MTGStore;
};

export const MockedProvider: React.FC<MockedProviderType> = (
  props: MockedProviderType,
) => {
  const { children, store } = props;

  return <Provider store={store}>{children}</Provider>;
};
