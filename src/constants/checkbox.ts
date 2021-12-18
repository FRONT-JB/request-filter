import { FilterMaterial, FilterMethod, FILTER_MATERIAL, FILTER_METHOD } from '~/types/request';

export const methodList: FilterMethod[] = [
  { label: FILTER_METHOD.MILLING, id: 'milling' },
  { label: FILTER_METHOD.LATHE, id: 'lathe' },
];

export const materialList: FilterMaterial[] = [
  { label: FILTER_MATERIAL.AL, id: 'aluminum' },
  { label: FILTER_MATERIAL.CS, id: 'carbon' },
  { label: FILTER_MATERIAL.CP, id: 'copper' },
  { label: FILTER_MATERIAL.AS, id: 'alloySteel' },
  { label: FILTER_MATERIAL.ST, id: 'steel' },
  { label: FILTER_MATERIAL.SL, id: 'stainless' },
];
