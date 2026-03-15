import {useGetConfigurationQuery} from '@/app/api';
import type {ImageSizes} from '@/common/types';

export const useImageBasePath = (size: ImageSizes) => {
  const {data} = useGetConfigurationQuery();
  const baseImageUrl = data?.images.secure_base_url;
  const imageSize = data?.images.poster_sizes.includes(size) ? size : '';
  if (data && imageSize) {
    return baseImageUrl + imageSize;
  }
};
