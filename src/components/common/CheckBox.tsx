import cn from 'classnames';
import { ChangeEvent } from 'react';

interface Props {
  id: string;
  label?: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ id, label, className, onChange }: Props) => {
  return (
    <div className={`check-box ${className}`}>
      <input
        className={`check-box__input`}
        type='checkbox'
        id={id}
        name={label}
        onChange={onChange}
      />
      <label className={`check-box__label`} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
