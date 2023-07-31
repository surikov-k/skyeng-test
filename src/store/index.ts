import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';
import { createApi } from '../services';

export const api = createApi();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  })
});
