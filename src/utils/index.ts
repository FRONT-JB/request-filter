import { FilterTypes, FILTER_METHOD, REQUEST_STATUS } from '~/types/request';

/**
 * @description
 * - 요청 리스트 상태별 컬러 리스트
 */
const COLOR_LIST = [{ status: REQUEST_STATUS.ON_GOING, color: 'orange' }];

/**
 * @description
 * - 요청리스트 상태별 컬러 핸들링 함수
 *
 * @param   title -> 요청리스트 상태값
 * @returns color -> colorName
 */
export const handleFindBadgeColor = (title: string) => {
  const find = COLOR_LIST.find((color) => color.status === title);
  return find?.color;
};

/**
 * @description
 * - 체크박스 배열 핸들링 함수
 *
 * @param   filterArray   -> 필터링중인 체크박스 배열
 * @param   label         -> 체크, 체크해제 된 라벨명
 * @param   isChecked     -> 체크 상태값
 * @returns filterArray[] -> 필터링 배열 리턴
 */
export const handleFilterList = <T extends FilterTypes>(
  filterArray: T[],
  label: T,
  isChecked: boolean,
): T[] => {
  if (isChecked) {
    return [...filterArray, label];
  }
  return filterArray.filter((list) => list !== label);
};

/**
 * @description
 * - 선택한 필터타입 추출
 *
 * @param label       -> 선택된 필터 아이템명
 * @param filterType  -> 선택할 필터타입명
 * @returns boolean
 */
export const handleSelectedFilter = <T extends FilterTypes>(
  label: T,
  filterType: 'method' | 'materials',
) => {
  if (filterType === 'method') {
    return label === FILTER_METHOD.LATHE || label === FILTER_METHOD.MILLING;
  }
  return label !== FILTER_METHOD.LATHE && label !== FILTER_METHOD.MILLING;
};
