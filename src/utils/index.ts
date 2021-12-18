import { FilterTypes, REQUEST_STATUS } from '~/types/request';

/**
 * @description
 * - 요청 리스트 상태별 컬러 리스트
 */
const COLOR_LIST = [{ status: REQUEST_STATUS.ON_GOING, color: 'orange' }];

/**
 * @description
 * - 요청 리스트 상담상태를 나타내는 Badge Color Return 함수
 */
export const handleFindBadgeColor = (title: string) => {
  const find = COLOR_LIST.find((color) => color.status === title);
  return find?.color;
};

export const handleCheckbox = <T extends FilterTypes>(
  filterArray: T[],
  label: T,
  isChecked: boolean,
): T[] => {
  if (isChecked) {
    return [...filterArray, label];
  }
  return filterArray.filter((list) => list !== label);
};
