import CheckBox from './CheckBox';

interface Props {
  title?: string;
  checked: boolean;
  onChange: () => void;
}

const Toggle = ({ title, onChange, checked }: Props) => {
  return (
    <div className='toggle-box'>
      <CheckBox id='toggle' className='toggle' checked={checked} onChange={onChange} />
      {title && <b className='toggle-box__title'>{title}</b>}
    </div>
  );
};
export default Toggle;
