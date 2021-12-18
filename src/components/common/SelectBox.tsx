import { ChangeEvent, useState } from 'react';
import { FilterMaterial, FilterMethod } from '~/types/request';
import cn from 'classnames';
import CheckBox from './CheckBox';

interface Props {
  selectOptions: FilterMethod[] | FilterMaterial[];
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SelectBox = ({ selectOptions, title, onChange }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={cn('select-box', {
        'select-box--active': isActive,
        // 'select-box--selected': isSelected,
      })}
      onClick={handleActive}
    >
      <b className='select-box__title'>{title}</b>
      <div className={cn('select-box__list', { 'select-box__list--active': isActive })}>
        {selectOptions?.map(({ id, label }) => (
          <div key={id} className='select-box__item'>
            <CheckBox key={id} id={id} label={label} onChange={onChange} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectBox;
