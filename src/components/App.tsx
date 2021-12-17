import '~/assets/style/index.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequest,
  requestListSelector,
  requestSelector,
  toggleOnGoing,
} from '~/store/slices/request';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const request = useSelector(requestListSelector);

  const handleOnGoing = () => {
    dispatch(toggleOnGoing());
  };

  useEffect(() => {
    if (request.length === 0) {
      dispatch(getRequest());
    }
  }, []);

  return (
    <div>
      {request?.map((list) => (
        <p key={list.id}>{list.title}</p>
      ))}
      <button style={{ color: 'black' }} type='button' onClick={handleOnGoing}>
        토글
      </button>
    </div>
  );
};

export default App;
