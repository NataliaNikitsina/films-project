import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import s from './SkeletonMovieDetail.module.css'

export const SkeletonMovieDetail = () => {
    return (
        <div className={s.container}>
            {Array(10).fill(null).map((_el, index) => (
                <div key={index}>
                    <Skeleton height={'280px'} width={'200px'}/>
                    <Skeleton height={'25px'} width={'200px'}/>
                </div>
            ))}
        </div>
    )
}