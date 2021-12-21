import { ChangeEvent, useRef, useState } from 'react';
import { FilterMaterial, FilterMethod, FilterTypes } from '~/types/request';
import cn from 'classnames';
import CheckBox from './CheckBox';
import useOutside from '~/hooks/useOutside';

interface Props {
  filterList: FilterTypes[];
  selectOptions: FilterMethod[] | FilterMaterial[];
  selectedValue?: number;
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SelectBox = ({ filterList, selectOptions, selectedValue, title, onChange }: Props) => {
  const selectRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive((prev) => !prev);
  };

  useOutside(selectRef, () => setIsActive(false));

  return (
    <div
      className={cn('select-box', {
        'select-box--active': isActive,
        'select-box--selected': !!selectedValue,
      })}
      ref={selectRef}
      onClick={handleActive}
    >
      <b className='select-box__title'>{`${
        selectedValue && selectedValue > 0 ? `${title}(${selectedValue})` : `${title}`
      }`}</b>
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
