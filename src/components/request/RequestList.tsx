import { useSelector } from 'react-redux';
import { requestListSelector } from '~/store/slices/request';
import RequestItem from './RequestItem';

const RequestList = () => {
  const requestList = useSelector(requestListSelector);
  const isEmptyRequest = requestList.length === 0;

  return (
    <div className='request'>
      <ul className='request__list'>
        {!isEmptyRequest &&
          requestList.map((request) => <RequestItem key={request.id} request={request} />)}
        {isEmptyRequest && (
          <div className='request__notfound'>조건에 맞는 견적 요청이 없습니다.</div>
        )}
      </ul>
    </div>
  );
};

export default RequestList;
