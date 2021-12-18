import { handleCheckbox } from './../../utils/index';
import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { FilterTypes, RequestItem, REQUEST_STATUS } from '~/types/request';
import { RootState } from '../reducer';

const REQUEST_SLICE = 'REQUEST' as const;

interface RequestState {
  isLoading: boolean;
  error: AxiosError | null;
  filter: FilterTypes[];
  request: RequestItem[];
  filteredRequest: RequestItem[];
  isOnGoing: boolean;
}

const initialState: RequestState = {
  isLoading: false,
  error: null,
  filter: [],
  request: [],
  filteredRequest: [],
  isOnGoing: false,
};

const requestSlice = createSlice({
  name: REQUEST_SLICE,
  initialState,
  reducers: {
    getRequest: (state) => {
      state.isLoading = true;
    },
    getRequestSucess: (state, { payload }: PayloadAction<RequestItem[]>) => {
      state.isLoading = false;
      state.request = payload;
      state.filteredRequest = payload;
    },
    getRequestError: (state, { payload }: PayloadAction<AxiosError>) => {
      state.isLoading = false;
      state.error = payload;
    },
    toggleOnGoing: (state) => {
      state.isOnGoing = !state.isOnGoing;
    },
    setFilter: (state, { payload }: PayloadAction<FilterTypes[]>) => {
      state.filter = payload;
    },
    resetFilter: (state) => {
      state.filter = [];
    },
  },
});

export const {
  toggleOnGoing,
  setFilter,
  resetFilter,
  getRequest,
  getRequestSucess,
  getRequestError,
} = requestSlice.actions;

export const requestSelector = (state: RootState) => state.request;

export const requestListSelector = createSelector(
  [requestSelector],
  ({ isOnGoing, filteredRequest }) => {
    return isOnGoing
      ? filteredRequest.filter((request) => request.status === REQUEST_STATUS.ON_GOING)
      : filteredRequest;
  },
);

export const reqeustLoadingSelector = createSelector([requestSelector], (state) => state.isLoading);

export const filterSelector = createSelector([requestSelector], ({ filter }) => filter);

export default requestSlice;
