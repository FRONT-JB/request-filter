import { useSelector } from 'react-redux';
import { requestListSelector } from '~/store/slices/request';
import RequestItem from './RequestItem';

const RequestList = () => {
  const requestList = useSelector(requestListSelector);
  return (
    <div className='request'>
      <ul className='request__list'>
        {requestList.map((request) => (
          <RequestItem key={request.id} request={request} />
        ))}
      </ul>
    </div>
  );
};

export default RequestList;
