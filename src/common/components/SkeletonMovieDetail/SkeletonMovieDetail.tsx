import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import s from './SkeletonMovieDetail.module.css'
import {useSkeletonTheme} from "@/common/hooks";

export const SkeletonMovieDetail = () => {
    const {baseColor, highlightColor} = useSkeletonTheme()
    return (
        <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
            <div className={s.container}>
                <Skeleton width={'100%'} height={'100%'} borderRadius={'10px'}/>
                <div>
                    <Skeleton width={'100%'} height={'100%'} borderRadius={'10px'}/>
                </div>
            </div>
        </SkeletonTheme>
    )
}