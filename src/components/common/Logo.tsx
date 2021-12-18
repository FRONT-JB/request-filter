import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '~/routes/path';

const Logo = () => {
  return (
    <h1 className='header__logo'>
      <Link to={ROUTE_PATH.ROOT}>DASHBOARD</Link>
    </h1>
  );
};

export default Logo;
