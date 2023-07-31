import { combineReducers } from '@reduxjs/toolkit';
import { Namespace } from '../constants';
import { appData } from './app-data/app-data';

export const rootReducer = combineReducers({
  [Namespace.Data]: appData.reducer,
});
