import { useSelector } from 'react-redux';
import { reqeustLoadingSelector, requestListSelector } from '~/store/slices/request';
import RequestItem from './RequestItem';

const RequestList = () => {
  const requestList = useSelector(requestListSelector);
  return (
    <div className='request'>
      <ul className='request__list'>
        {requestList.map((request) => (
          <RequestItem key={request.id} item={request} />
        ))}
      </ul>
    </div>
  );
};

export default RequestList;
