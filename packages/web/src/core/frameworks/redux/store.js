'use strict';
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
exports.__esModule = true;
var redux_1 = require('redux');
var redux_saga_1 = require('redux-saga');
var counterReducer_1 = require('./ducks/counterReducer');
var userReducer_1 = require('./ducks/userReducer');
var sagas_1 = require('./sagas');
var RESET_STATE = 'rootReducer/resetState';
exports.resetStateAction = function() {
  return { type: RESET_STATE };
};
exports.configureStore = function(
  adapter,
  appSpecificMiddleware,
  appSpecificReducers,
) {
  if (appSpecificMiddleware === void 0) {
    appSpecificMiddleware = [];
  }
  if (appSpecificReducers === void 0) {
    appSpecificReducers = {};
  }
  if (!adapter.hasBeenInitialized()) {
    throw new Error('ReduxAdapter is required.');
  }
  var sharedReducers = {
    counter: counterReducer_1.counterReducer(adapter.counter),
    user: userReducer_1.userReducer,
  };
  var reducers = redux_1.combineReducers(
    __assign({}, sharedReducers, appSpecificReducers),
  );
  var rootReducer = function(state, action) {
    if (action.type === RESET_STATE) {
      // https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store/35641992#35641992
      return reducers(undefined, action);
    }
    return reducers(state, action);
  };
  var sagaMiddleware = redux_saga_1['default']();
  var sharedMiddleware = [sagaMiddleware];
  var middleware = sharedMiddleware.concat(appSpecificMiddleware);
  var composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
  var store = redux_1.createStore(
    rootReducer,
    composeEnhancers(redux_1.applyMiddleware.apply(void 0, middleware)),
  );
  sagaMiddleware.run(sagas_1.rootSaga, adapter);
  return store;
};
