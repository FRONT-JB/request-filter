import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { FilterTypes, RequestItem, REQUEST_STATUS } from '~/types/request';
import { handleSelectedFilter } from '~/utils';
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
      const isFilterActive = !!payload.length;
      state.filter = payload;
      state.filteredRequest = isFilterActive
        ? state.request.filter((request) => {
            return payload.some(
              (label) => request.method.includes(label) || request.material.includes(label),
            );
          })
        : state.request;
    },
    resetFilter: (state) => {
      state.filter = [];
      state.isOnGoing = false;
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
export const filterSelector = createSelector([requestSelector], ({ filter }) => filter);
export const selectedFilterSelector = createSelector(
  [requestSelector],
  ({ filter: filterList, isOnGoing }) => {
    return {
      selectedMethod: filterList.filter((label) => handleSelectedFilter(label, 'method')).length,
      selectedMaterials: filterList.filter((label) => handleSelectedFilter(label, 'materials'))
        .length,
      isOnGoing,
    };
  },
);
export const requestListSelector = createSelector(
  [requestSelector],
  ({ isOnGoing, filteredRequest }) => {
    return isOnGoing
      ? filteredRequest.filter((request) => request.status === REQUEST_STATUS.ON_GOING)
      : filteredRequest;
  },
);
export default requestSlice;
