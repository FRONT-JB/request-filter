import { RequestItem as RequestItemTypes } from '~/types/request';
import { handleFindBadgeColor } from '~/utils';
import Badge from '../common/Badge';

interface Props {
  request: RequestItemTypes;
}

const RequestItem = ({ request }: Props) => {
  const { id, title, client, due, count = 0, amount, method, material, status } = request;

  return (
    <li className='request__item'>
      <div className='request__item-header'>
        <Badge title={status} color={handleFindBadgeColor(status)} />
        <b className='title'>{title}</b>
        <p className='client'>{client}</p>
        <p className='due-date'>{due}까지 납기</p>
      </div>
      <div className='request__item-body'>
        <dl className='request__item-info'>
          <dt className='title'>
            <span>도면개수</span>
          </dt>
          <dd className='desc'>
            <b>{count}개</b>
          </dd>
        </dl>
        <dl className='request__item-info'>
          <dt className='title'>
            <span>총 수량</span>
          </dt>
          <dd className='desc'>
            <b>{amount}개</b>
          </dd>
        </dl>
        <dl className='request__item-info'>
          <dt className='title'>
            <span>가공 방식</span>
          </dt>
          <dd className='desc'>
            <b>{method.join(', ')}</b>
          </dd>
        </dl>
        <dl className='request__item-info'>
          <dt className='title'>
            <span>재료</span>
          </dt>
          <dd className='desc'>
            <b>{material.join(', ')}</b>
          </dd>
        </dl>
      </div>
      <div className='btn-set'>
        <button className='btn-blue'>요청 내역 보기</button>
        <button className='btn-blue-border'>채팅하기</button>
      </div>
    </li>
  );
};

export default RequestItem;
