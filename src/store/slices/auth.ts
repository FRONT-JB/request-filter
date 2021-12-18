import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../reducer';

const AUTH_SLICE = 'AUTH' as const;

interface AuthState {
  companyName: string;
}

const initialState: AuthState = {
  companyName: '',
};

const authSlice = createSlice({
  name: AUTH_SLICE,
  initialState,
  reducers: {
    setAuth: (state, { payload }: PayloadAction<string>) => {
      state.companyName = payload;
    },
    setLogout: (state) => {
      state.companyName = '';
    },
  },
});

export const { setAuth, setLogout } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export const selectCompanyName = createSelector([authSelector], (state) => state.companyName);
export default authSlice;
