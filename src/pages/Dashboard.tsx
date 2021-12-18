import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '~/components/header';

const Dashboard = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Outlet />
    </div>
  );
};
export default Dashboard;
