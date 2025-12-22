import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from "react-loading-skeleton";
import s from './SkeletonMainPage.module.css'

export const SkeletonMainPage = () => {
    return (
        <Skeleton className={s.backdrop}/>
    )
}