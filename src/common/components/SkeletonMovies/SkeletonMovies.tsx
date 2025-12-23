import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import s from './SkeletonMovies.module.css'

export const SkeletonMovies = () => {
    return (
        <div className={s.container}>
            {Array(10).fill(null).map((_el, index) => (
                <div key={index} className={s.card}>
                    <Skeleton borderRadius={'10px'} className={s.poster}/>
                    <Skeleton height={'25px'} borderRadius={'10px'}/>
                </div>
            ))}
        </div>
    )
}