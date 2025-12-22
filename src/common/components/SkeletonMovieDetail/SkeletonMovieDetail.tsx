import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import s from './SkeletonMovieDetail.module.css'

export const SkeletonMovieDetail = () => {
    return (
        <div className={s.container}>
            <Skeleton width={'100%'} height={'100%'} borderRadius={'10px'}/>
            <div>
                <Skeleton width={'100%'} height={'100%'} borderRadius={'10px'}/>
            </div>
        </div>
    )
}