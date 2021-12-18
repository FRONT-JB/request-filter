type types<t> = t[keyof t];

/**
 * @description
 * - 가공방식
 */
export const FILTER_METHOD = {
  MILLING: '밀링',
  LATHE: '선반',
} as const;

export type FilterMethodTypes = types<typeof FILTER_METHOD>;

export interface FilterMethod {
  id: string;
  label: FilterMethodTypes;
}

/**
 * @description
 * - 재료
 */
export const FILTER_MATERIAL = {
  AL: '알루미늄',
  CS: '탄소강',
  CP: '구리',
  AS: '합금강',
  ST: '강철',
  SL: '스테인리스강',
} as const;

export type FilterMaterialTypes = types<typeof FILTER_MATERIAL>;

export interface FilterMaterial {
  id: string;
  label: FilterMaterialTypes;
}

export type FilterTypes = FilterMethodTypes & FilterMaterialTypes;

/**
 * @description
 * - 상담요청 상태
 */

export const REQUEST_STATUS = {
  WAITING: '대기중',
  ON_GOING: '상담중',
} as const;

export type RequestStatusTypes = types<typeof REQUEST_STATUS>;

/**
 * @description
 * - 상담요청 리스트 타입
 */

export interface RequestItem {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: FilterMethodTypes[];
  material: FilterMaterialTypes[];
  status: RequestStatusTypes;
}

export interface RequestList {
  requests: RequestItem[];
}
