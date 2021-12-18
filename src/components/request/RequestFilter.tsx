import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { materialList, methodList } from '~/constants/checkbox';
import {
  filterSelector,
  requestSelector,
  resetFilter,
  setFilter,
  toggleOnGoing,
} from '~/store/slices/request';
import { FilterTypes } from '~/types/request';
import { handleCheckbox } from '~/utils';
import { SelectBox, Toggle } from '../common';

const RequestFilter = () => {
  const dispatch = useDispatch();
  const filterList = useSelector(filterSelector);
  const { isOnGoing } = useSelector(requestSelector);

  const handleResetFilter = () => {
    dispatch(resetFilter());
  };

  const handleGoingToggle = () => {
    dispatch(toggleOnGoing());
  };

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { name: label, checked: isChecked } = e.target as {
      name: FilterTypes;
      checked: boolean;
    };
    const newFilter = handleCheckbox(filterList, label, isChecked);
    dispatch(setFilter(newFilter));
  };

  return (
    <div className='filter-box'>
      <div className='filter-box__select'>
        <SelectBox title='가공방식' selectOptions={methodList} onChange={handleFilter} />
        <SelectBox title='재료' selectOptions={materialList} onChange={handleFilter} />
        <button className='btn-reset' onClick={handleResetFilter}>
          필터링 리셋
        </button>
      </div>
      <div className='filter-box__request-state'>
        <Toggle title='상담 중인 요청만 보기' checked={isOnGoing} onChange={handleGoingToggle} />
      </div>
    </div>
  );
};

export default RequestFilter;
