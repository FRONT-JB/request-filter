import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContentHeader } from '~/components/header';
import RequestFilter from '~/components/request/RequestFilter';
import RequestList from '~/components/request/RequestList';
import { getRequest } from '~/store/slices/request';

const RequestContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequest());
  }, []);

  return (
    <div className='content'>
      <ContentHeader title='들어온 요청' subTitle='파트너님에게 딱 맞는 요청서를 찾아보세요.' />
      <RequestFilter />
      <RequestList />
    </div>
  );
};

export default RequestContainer;
