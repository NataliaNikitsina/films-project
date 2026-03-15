import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import s from './SkeletonMovies.module.css';
import {useSkeletonTheme} from '@/common/hooks';

export const SkeletonMovies = () => {
  const {baseColor, highlightColor} = useSkeletonTheme();
  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <div className={s.container}>
        {Array(10)
          .fill(null)
          .map((_el, index) => (
            <div key={index} className={s.card}>
              <Skeleton borderRadius={'10px'} className={s.poster} />
              <Skeleton height={'25px'} borderRadius={'10px'} />
            </div>
          ))}
      </div>
    </SkeletonTheme>
  );
};
