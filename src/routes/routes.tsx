import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RequestContainer } from '~/container';
import { Dashboard } from '~/pages';
import { ROUTE_PATH } from './path';

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_PATH.ROOT} element={<Dashboard />}>
          <Route index element={<RequestContainer />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRoutes;
