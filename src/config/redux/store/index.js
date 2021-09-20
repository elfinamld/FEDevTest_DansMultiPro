import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {enableBatching} from 'redux-batched-actions';
import {createLogicMiddleware} from 'redux-logic';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import logic from '../logic';
import authReducer from '../reducer/authReducer';
import jobReducer from '../reducer/jobReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  authReducer,
  jobReducer,
});

const logicMiddleware = createLogicMiddleware(logic);
const middlewareEnhancer = applyMiddleware(logicMiddleware);
const enhancer = compose(
  middlewareEnhancer,
  composeWithDevTools(applyMiddleware()),
);
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer', 'jobReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(enableBatching(persistedReducer), enhancer);
store.logicMiddleware = logicMiddleware;
let persistor = persistStore(store);
export {store, persistor};
