import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../slices/auth';
import requestSlice from '../slices/request';

const rootReducer = combineReducers({
  request: requestSlice.reducer,
  auth: authSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
