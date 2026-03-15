import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import s from './SkeletonMainPage.module.css';
import {useSkeletonTheme} from '@/common/hooks';

export const SkeletonMainPage = () => {
  const {baseColor, highlightColor} = useSkeletonTheme();
  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <Skeleton className={s.backdrop} />
    </SkeletonTheme>
  );
};
