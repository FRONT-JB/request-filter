import { ChangeEvent, useState } from 'react';
import { FilterMaterial, FilterMethod, FilterTypes } from '~/types/request';
import cn from 'classnames';
import CheckBox from './CheckBox';

interface Props {
  filterList: FilterTypes[];
  selectOptions: FilterMethod[] | FilterMaterial[];
  selectedValue?: number;
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SelectBox = ({ filterList, selectOptions, selectedValue, title, onChange }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={cn('select-box', {
        'select-box--active': isActive,
        'select-box--selected': !!selectedValue,
      })}
      onClick={handleActive}
    >
      <b className='select-box__title'>{title}</b>
      <div className={cn('select-box__list', { 'select-box__list--active': isActive })}>
        {selectOptions?.map(({ id, label }) => (
          <div key={id} className='select-box__item'>
            <CheckBox
              key={id}
              id={id}
              label={label}
              checked={filterList?.includes(label)}
              onChange={onChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectBox;
