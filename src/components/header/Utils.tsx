interface Props {
  companyName: string;
  onLogout: () => void;
}

const Utils = ({ companyName, onLogout }: Props) => {
  return (
    <div className='header__utils'>
      <p className='company-name'>{companyName || '이름 없음'}</p>
      <button type='button' className='btn-logout' onClick={onLogout}>
        로그아웃
      </button>
    </div>
  );
};

export default Utils;
