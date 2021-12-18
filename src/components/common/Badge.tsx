import { REQUEST_STATUS } from '~/types/request';

interface Props {
  color?: string;
  title: string;
}

const Badge = ({ color, title }: Props) => {
  if (REQUEST_STATUS.WAITING === title) return null;
  return <span className={color ? `badge badge-${color}` : 'badge'}>{title}</span>;
};

export default Badge;
