export const findActionByType = async (store, input) => {
  let type = '';

  if (typeof input === 'string' || input instanceof String) {
    type = input;
  } else {
    type = input.type;
  }

  const action = findDispatchedAction(store, type);

  if (action) {
    return action;
  }

  return waitUntilActionIsDispatched(store, type);
};

function findDispatchedAction(store, type) {
  return store.getActions().find(action => action.type === type);
}

function waitUntilActionIsDispatched(store, type) {
  return new Promise((resolve, reject) => {
    const timeout = 1000;
    const timerId = setTimeout(reject, timeout, {
      type,
      timeout,
      actions: store.getActions(),
    });

    const unSubscriber = store.subscribe(() => {
      const action = findDispatchedAction(store, type);

      if (action) {
        unSubscriber();
        clearTimeout(timerId);
        resolve(action);
      }
    });
  });
}
