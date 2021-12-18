import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCompanyName, setAuth, setLogout } from '~/store/slices/auth';
import { Logo } from '../common';
import Utils from './Utils';

const Header = () => {
  const dispatch = useDispatch();
  const companyName = useSelector(selectCompanyName);

  const handleLogout = () => {
    dispatch(setLogout());
  };

  useEffect(() => {
    dispatch(setAuth('A 가공업체'));
  }, []);

  return (
    <header className='header'>
      <Logo />
      <Utils companyName={companyName} onLogout={handleLogout} />
    </header>
  );
};

export default Header;
