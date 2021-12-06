import { createStore } from 'redux';

import reducers from '../reducers';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
/**
 * Custom middle ware implementations
 */
// import { logger } from '../middlewares/logger';

export const store = createStore(persistedReducer);
/**
 * Add custom middlewares
 * They are executed in the order they are registered here
 */
// const store = createStore(reducers, applyMiddleware(...middlewares, logger));

export type AppDispatch = typeof store.dispatch;

/**
 * The persistor for persisting the global state
 */
export let persistor = persistStore(store)
