import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { materialList, methodList } from '~/constants/checkbox';
import { filterSelector, resetFilter, setFilter } from '~/store/slices/request';
import { handleCheckbox } from '~/utils';
import { SelectBox } from '../common';

const RequestFilter = () => {
  const dispatch = useDispatch();
  const filterList = useSelector(filterSelector);

  const onResetFilter = () => {
    dispatch(resetFilter());
  };

  const onGoingToggle = () => {
    dispatch(onGoingToggle());
  };

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { name: label, checked: isChecked } = e.target;
    console.log(label, isChecked);
  };

  return (
    <div className='filter-box'>
      <div className='filter-box__select'>
        <SelectBox title='가공방식' selectOptions={methodList} onChange={handleFilter} />
        <SelectBox title='재료' selectOptions={materialList} onChange={handleFilter} />
        <button className='btn-reset' onClick={onResetFilter}>
          필터링 리셋
        </button>
      </div>
      <div className='filter-box__request-state'>
        {/* <Toggle title='상담 중인 요청만 보기' checked={onGoingToggle} onChange={handleFilter} /> */}
      </div>
    </div>
  );
};

export default RequestFilter;
