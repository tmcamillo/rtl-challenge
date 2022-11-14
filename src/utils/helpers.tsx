import { ICrop } from './data/bundle-interface';

export function getImageType(array: ICrop[], imageType: string) {
  return array.find((item: ICrop) => item.type === imageType)?.path || '';
}
